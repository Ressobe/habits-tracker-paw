using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Tokens;

public class RefreshTokenDto
{
  [Required]
  public string RefreshToken { get; set; } = string.Empty;
}
