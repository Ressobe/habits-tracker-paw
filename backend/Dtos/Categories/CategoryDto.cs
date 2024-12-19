using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Categories;

public class CategoryDto
{
  [Required]
  public Guid Id { get; set; }
  [Required]
  public string Name { get; set; }
}