using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Categories;

public class UpdateCategoryDto
{
  [Required]
  [MinLength(2, ErrorMessage = "Category name must be at least 2 characters long")]
  [MaxLength(50, ErrorMessage = "Category name must be at most 50 characters long")]
  public string Name { get; set; }
}