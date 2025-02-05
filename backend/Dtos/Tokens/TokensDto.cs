using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Tokens;

public class TokensDto
{
  [Required]
  public string? AccessToken { get; set; }
  [Required]
  public string? RefreshToken { get; set; }
}
