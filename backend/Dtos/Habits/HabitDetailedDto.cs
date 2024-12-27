using System.ComponentModel.DataAnnotations;
using backend.Dtos.Categories;
using backend.Dtos.Realizations;

namespace backend.Dtos.Habits;

public class HabitDetailedDto
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
  [Required]
  public int StreakDays { get; set; } = 0;
  [Required]
  public int FailedDays { get; set; } = 0;
  [Required]
  public int CompletedDays { get; set; } = 0;
  [Required]
  public int TotalDays { get; set; } = 0;
  [Required]
  public int Total { get; set; } = 0;
  [Required]
  public List<RealizationDto> Realizations { get; set; } = [];
}