using backend.Models;

namespace backend.Interfaces;

public interface ICategoriesRepository
{
  Task<Guid> CreateAsync(Category category);
  Task<List<Category>> GetAllByUserIdAsync(string userId);
}