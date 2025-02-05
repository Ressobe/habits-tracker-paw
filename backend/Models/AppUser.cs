using Microsoft.AspNetCore.Identity;

namespace backend.Models;

public class AppUser : IdentityUser
{
  public string? FirstName { get; set; }
  public string? LastName { get; set; }
  public string? RefreshToken { get; set; }
  public DateTime RefreshTokenExpiryTime { get; set; }
  public List<Habit> Habits { get; set; } = [];
  public List<Category> Categories { get; set; } = [];
}
