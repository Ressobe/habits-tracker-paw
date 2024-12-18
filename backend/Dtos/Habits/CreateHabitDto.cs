using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Habits;

public class CreateHabitDto
{
  [Required]
  [MinLength(3, ErrorMessage = "name must be at least 3 characters")]
  [MaxLength(50, ErrorMessage = "name must be at most 30 characters")]
  public string Name { get; set; }
  [MaxLength(500, ErrorMessage = "description must be at most 500 characters")]
  public string Description { get; set; } = string.Empty;
  [Range(1, 3, ErrorMessage = "priority must be between 1 and 3")]
  public int Priority { get; set; } = 1;
}