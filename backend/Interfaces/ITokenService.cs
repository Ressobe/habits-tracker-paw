using backend.Models;

namespace backend.Interfaces
{
  public interface ITokenService
  {
    string CreateAccessToken(AppUser user);
    string CreateRefreshToken();
  }
}
