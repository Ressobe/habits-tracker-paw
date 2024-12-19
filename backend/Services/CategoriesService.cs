using backend.Dtos.Categories;
using backend.Interfaces;
using backend.Mappers;

namespace backend.Services;

public class CategoriesService(ICategoriesRepository categoriesRepo) : ICategoriesService
{
  private readonly ICategoriesRepository _categoriesRepo = categoriesRepo;
  public async Task<Guid> CreateCategoryAsync(CreateCategoryDto toCreateCategory, string userId)
  {
    var category = toCreateCategory.ToCategoryFromDto();
    category.CreatedById = userId;

    return await _categoriesRepo.CreateAsync(category);
  }

  public async Task<List<CategoryDto>> GetAllCategoriesByUserIdAsync(string userId)
  {
    var categories = await _categoriesRepo.GetAllByUserIdAsync(userId);

    return categories.Select(c => c.ToCategoryDto()).ToList();
  }
}