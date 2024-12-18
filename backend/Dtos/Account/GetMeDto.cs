using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Account;

public class GetMeDto
{
  [Required]
  public string Username { get; set; } = string.Empty;
  [Required]
  public string Email { get; set; } = string.Empty;
  [Required]
  public string FirstName { get; set; } = string.Empty;
  [Required]
  public string LastName { get; set; } = string.Empty;
}