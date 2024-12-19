using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class CategoriesRepository(ApplicationDBContext context) : ICategoriesRepository
{
  private readonly ApplicationDBContext _context = context;
  public async Task<Guid> CreateAsync(Category category)
  {
    await _context.Categories.AddAsync(category);
    await _context.SaveChangesAsync();
    return category.Id;
  }
}