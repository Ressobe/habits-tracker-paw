using backend.Dtos.Categories;

namespace backend.Interfaces;

public interface ICategoriesService
{
  Task<Guid> CreateCategoryAsync(CreateCategoryDto toCreateCategory, string userId);
  Task<List<CategoryDto>> GetAllCategoriesByUserIdAsync(string userId);
}