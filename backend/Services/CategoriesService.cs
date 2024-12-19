using backend.Dtos.Categories;
using backend.Exceptions;
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

  public async Task DeleteCategoryAsync(Guid categoryId, string userId)
  {
    var toDeleteCategory = await _categoriesRepo.GetByIdAsync(categoryId, userId);
    if (toDeleteCategory is null) {
      throw new CategoryNotFoundException();
    }
    await _categoriesRepo.DeleteAsync(toDeleteCategory);
  }

    public async Task<List<CategoryDto>> GetAllCategoriesByUserIdAsync(string userId)
  {
    var categories = await _categoriesRepo.GetAllByUserIdAsync(userId);

    return categories.Select(c => c.ToCategoryDto()).ToList();
  }

  public async Task<Guid> UpdateCategoryAsync(Guid categoryId, UpdateCategoryDto updateCategoryDto, string userId)
  {
    var category = await _categoriesRepo.GetByIdAsync(categoryId, userId);
    if (category is null) {
      throw new CategoryNotFoundException();
    }
    category.Name = updateCategoryDto.Name;
    await _categoriesRepo.UpdateAsync(category);
    return category.Id;
  }
}