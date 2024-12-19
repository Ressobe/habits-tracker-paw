using backend.Data;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

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

  public async Task DeleteAsync(Category category)
  {
    _context.Categories.Remove(category);
    await _context.SaveChangesAsync();
  }

    public async Task<List<Category>> GetAllByUserIdAsync(string userId)
  {
    return await _context.Categories.Where(c => c.CreatedById == userId).ToListAsync();
  }

  public async Task<Category?> GetByIdAsync(Guid id, string userId)
  {
    return await _context.Categories
      .FirstOrDefaultAsync(c => c.Id == id && c.CreatedById == userId);
  }

    public async Task<Guid> UpdateAsync(Category category)
  {
    _context.Entry(category).State = EntityState.Modified;
    await _context.SaveChangesAsync();
    return category.Id;
  }
}