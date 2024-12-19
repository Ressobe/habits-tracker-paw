using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using backend.Dtos.Account;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using backend.Interfaces;
using System.Security.Claims;
using backend.Filters;

namespace backend.Controllers
{
    [Route("api/account")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly ITokenService _tokenService;
        private readonly SignInManager<AppUser> _signInManager;

        public AccountController(UserManager<AppUser> userManager, ITokenService tokenService, SignInManager<AppUser> signInManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signInManager = signInManager;
        }

        /// <summary>
        /// Register user
        /// </summary>
        /// <param name="registerDto"></param>
        /// <returns></returns>
        [HttpPost("register")]
        [ProducesResponseType(typeof(NewUserDto), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Register([FromBody] RegisterDto registerDto)
        {
            try{
                if (!ModelState.IsValid) {
                    return BadRequest(ModelState);
                }
                var appUser = new AppUser{
                    UserName = registerDto.Username,
                    Email = registerDto.Email,
                    FirstName = registerDto.FirstName,
                    LastName = registerDto.LastName
                };

                var createdUser = await _userManager.CreateAsync(appUser, registerDto.Password);

                if (createdUser.Succeeded) {
                    var roleResult = await _userManager.AddToRoleAsync(appUser, "User");
                    if (roleResult.Succeeded) {
                        return Ok(
                            new NewUserDto
                            {
                                UserName = appUser.UserName,
                                Email = appUser.Email,
                                Token = _tokenService.CreateToken(appUser),
                            }
                        );
                    }
                    else {
                        return StatusCode(500, roleResult.Errors);
                    }

                }
                else {
                    return StatusCode(500, createdUser.Errors);
                }
            }
            catch (Exception e) {
                return StatusCode(500, e);
            }
        }

        /// <summary>
        /// Login user
        /// </summary>
        /// <param name="loginDto"></param>
        /// <returns></returns>
        [HttpPost("login")]
        [ProducesResponseType(typeof(NewUserDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName.ToLower() == loginDto.Username.ToLower());

            if (user is null) {
                return Unauthorized(new { message = "Username not found or password incorrect" });
            }
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded) {
                return Unauthorized(new { message = "Username not found or password incorrect" });
            }

            return Ok(
                new NewUserDto
                {
                    UserName = user.UserName,
                    Email = user.Email,
                    Token = _tokenService.CreateToken(user),
                }
            );
        }
        /// <summary>
        /// Get user info
        /// </summary>
        /// <returns></returns>
        [HttpGet("me")]
        [Authorize]
        [AuthorizeUser]
        [ProducesResponseType(typeof(GetMeDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetMe()
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId)) {
                return Unauthorized(new { message = "User not authenticated" });
            }

            var user = await _userManager.FindByIdAsync(userId);
            if (user is null) {
                return Unauthorized(new { message = "Invalid user!" });
            }
            return Ok(
                new GetMeDto
                {
                    Username = user.UserName,
                    Email = user.Email,
                    FirstName = user.FirstName,
                    LastName = user.LastName,
                }
            );
        }


        /// <summary>
        /// Change user password
        /// </summary>
        /// <param name="changePasswordDto"></param>
        /// <returns></returns>
        [HttpPut("change-password")]
        [Authorize]
        [AuthorizeUser]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDto changePasswordDto)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            var userId = HttpContext.Items["UserId"] as string;

            var user = await _userManager.FindByIdAsync(userId);

            if (user is null) {
                return Unauthorized(new { message = "Invalid username!" });
            }
            if (changePasswordDto.CurrentPassword == changePasswordDto.NewPassword) {
                return BadRequest(new { message = "New password cannot be the same as the current password" });
            }
            var changePasswordResult = await _userManager.ChangePasswordAsync(
                user,
                changePasswordDto.CurrentPassword,
                changePasswordDto.NewPassword
            );
            if (changePasswordResult.Succeeded) {
                return Ok(new { message = "Password changed successfully" });
            }
            else {
                return StatusCode(500, changePasswordResult.Errors);
            }
        }
        /// <summary>
        /// Updates user's first and last name
        /// </summary>
        /// <param name="dto"></param>
        /// <returns></returns>
        [HttpPut("update-names")]
        [Authorize]
        [AuthorizeUser]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> UpdateNames([FromBody] UpdateNamesDto updateNamesDto)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            var userId = HttpContext.Items["UserId"] as string;

            var user = await _userManager.FindByIdAsync(userId);
            if (user is null) {
                return Unauthorized(new { message = "Invalid user!" });
            }

            user.FirstName = updateNamesDto.FirstName;
            user.LastName = updateNamesDto.LastName;

            await _userManager.UpdateAsync(user);
            return Ok(new { message = "Account updated successfully" });
        }
    }
}