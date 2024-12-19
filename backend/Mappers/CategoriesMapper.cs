using backend.Dtos.Categories;
using backend.Models;

namespace backend.Mappers;

public static class CategoriesMapper
{
  public static Category ToCategoryFromDto(this CreateCategoryDto createCategoryDto)
  {
    return new Category
    {
      Name = createCategoryDto.Name,
    };
  }
}