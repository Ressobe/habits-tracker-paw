using api.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using api.Dtos.Account;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Authorization;
using api.Interfaces;
using System.Security.Claims;

namespace api.Controllers
{
    [Microsoft.AspNetCore.Components.Route("api/account")]
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
                                FirstName = appUser.FirstName,
                                LastName = appUser.LastName
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
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName.ToLower() == loginDto.Username.ToLower());

            if (user is null) {
                return Unauthorized("Invalid username!");
            }
            var result = await _signInManager.CheckPasswordSignInAsync(user, loginDto.Password, false);

            if (!result.Succeeded) {
                return Unauthorized("Username not found or password incorrect");
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
        /// Change user password
        /// </summary>
        /// <param name="changePasswordDto"></param>
        /// <returns></returns>
        [HttpPut("changepassword")]
        [Authorize]
        public async Task<IActionResult> ChangePassword([FromBody] ChangePasswordDto changePasswordDto)
        {
            if (!ModelState.IsValid) {
                return BadRequest(ModelState);
            }

            var username = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (string.IsNullOrEmpty(username)) {
                return Unauthorized("User not authenticated");
            }
            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName.ToLower() == username.ToLower());

            if (user is null) {
                return Unauthorized("Invalid username!");
            }
            if (changePasswordDto.CurrentPassword == changePasswordDto.NewPassword) {
                return BadRequest("New password cannot be the same as the current password");
            }
            var changePasswordResult = await _userManager.ChangePasswordAsync(
                user,
                changePasswordDto.CurrentPassword,
                changePasswordDto.NewPassword
            );
            if (changePasswordResult.Succeeded) {
                return Ok("Password changed successfully");
            }
            else {
                return StatusCode(500, changePasswordResult.Errors);
            }
        }
    }
}