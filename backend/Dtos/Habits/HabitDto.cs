namespace backend.Dtos.Habits;

public class HabitDto
{
  public Guid Id { get; set; }
  public string Name { get; set; }
  public string Description { get; set; }
  public int Priority { get; set; }
  public DateTime CreatedAt { get; set; }
}