
using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Realizations;

public class RealizationDto
{
  [Required]
  public Guid Id { get; set; }
  [Required]
  public DateTime Date { get; set; }
}