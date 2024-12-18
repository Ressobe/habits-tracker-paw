using backend.Models;

namespace backend.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}