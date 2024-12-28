using System.ComponentModel.DataAnnotations;
using backend.Dtos.Categories;

namespace backend.Dtos.Habits;

public class HabitDto
{
  [Required]
  public Guid Id { get; set; }
  [Required]
  public string Name { get; set; }
  [Required]
  public string Description { get; set; }
  [Required]
  public int Priority { get; set; }
  [Required]
  public DateTime CreatedAt { get; set; }
  public CategoryDto? Category { get; set; }
  [Required]
  public bool IsTodayDone { get; set; } = false;
}