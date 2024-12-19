using backend.Models;

namespace backend.Interfaces;

public interface ICategoriesRepository
{
  Task<Guid> CreateAsync(Category category);
  Task<List<Category>> GetAllByUserIdAsync(string userId);
  Task<Category?> GetByIdAsync(Guid id, string userId);
  Task<Guid> UpdateAsync(Category category);
  Task DeleteAsync(Category category);
}