using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("Realizations")]
public class Realization
{
  public Guid Id { get; set; }= Guid.NewGuid();
  public DateTime Date { get; set; } = DateTime.UtcNow;
  public Guid HabitId { get; set; }
  public Habit Habit { get; set; }
}