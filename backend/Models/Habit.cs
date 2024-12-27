using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;
[Table("Habits")]
public class Habit
{
   public Guid Id { get; set; } = Guid.NewGuid();
   public string Name { get; set; }
   public string Description { get; set; } = string.Empty;
   public int Priority { get; set; } = 1; // 1 - low, 2 - medium, 3 - high
   public string CreatedById { get; set; }
   public AppUser CreatedBy { get; set; }
   public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
   public Guid? CategoryId { get; set; }
   public Category? Category { get; set; }
   public List<Realization> Realizations { get; set; } = [];
}