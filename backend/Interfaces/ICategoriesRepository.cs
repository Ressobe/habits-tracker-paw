using backend.Models;

namespace backend.Interfaces;

public interface ICategoriesRepository
{
  Task<Guid> CreateAsync(Category category);
}