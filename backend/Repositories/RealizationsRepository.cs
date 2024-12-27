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

    public Task<List<Realization>> GetAllByHabitIdAsync(Guid habitId)
    {
        throw new NotImplementedException();
    }

  public async Task<Realization> GetByIdAsync(Guid id)
  {
    return await _dbContext.Realizations.FirstOrDefaultAsync(r => r.Id == id);
  }
}