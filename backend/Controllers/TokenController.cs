using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using backend.Interfaces;
using backend.Dtos.Tokens;
namespace backend.Controllers;

[Route("api/token")]
[ApiController]
public class TokenController : ControllerBase
{
  private readonly ITokenService _tokenService;
  private readonly UserManager<AppUser> _userManager;

  public TokenController(UserManager<AppUser> userManager, ITokenService tokenService)
  {
    _userManager = userManager;
    _tokenService = tokenService;
  }

  [HttpPost("refresh-token")]
  public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenDto refreshTokenDto)
  {
    if (string.IsNullOrEmpty(refreshTokenDto.RefreshToken))
    {
      return BadRequest("Invalid refresh token");
    }
    var user = await _userManager.Users.FirstOrDefaultAsync(x =>
      x.RefreshToken == refreshTokenDto.RefreshToken);

    if (user is null || user.RefreshTokenExpiryTime <= DateTime.UtcNow)
    {
      return Unauthorized("Invalid refresh token");
    }

    var newAccessToken = _tokenService.CreateAccessToken(user);
    var newRefreshToken = _tokenService.CreateRefreshToken();

    await _userManager.UpdateAsync(user);
    return Ok(new TokensDto
    {
      AccessToken = newAccessToken,
      RefreshToken = newRefreshToken
    });
  }
}
