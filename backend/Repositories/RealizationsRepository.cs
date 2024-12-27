using backend.Data;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Repositories;

public class RealizationsRepository(ApplicationDBContext dbContext) : IRealizationsRepository
{
  private readonly ApplicationDBContext _dbContext = dbContext;

  public async Task<Realization> CreateAsync(Realization realization)
  {
    await _dbContext.Realizations.AddAsync(realization);
    await _dbContext.SaveChangesAsync();
    return realization;
  }
  public async Task DeleteAsync(Realization realization)
  {
    _dbContext.Realizations.Remove(realization);
    await _dbContext.SaveChangesAsync();
  }
  public async Task<Realization?> GetByIdAsync(Guid id, string userId)
  {
    return await _dbContext.Realizations
      .Include(r => r.Habit)
      .FirstOrDefaultAsync(r => r.Id == id && r.Habit.CreatedById == userId);
    // return await _dbContext.Realizations.FirstOrDefaultAsync(r => r.Id == id);
  }
}