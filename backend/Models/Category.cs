using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("Categories")]
public class Category
{
  public Guid Id { get; set; }
  public string Name { get; set; }
  public string CreatedById { get; set; }
  public AppUser CreatedBy { get; set; }
  public List<Habit> Habits { get; set; } = [];
}