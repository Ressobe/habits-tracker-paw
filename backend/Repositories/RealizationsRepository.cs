using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class RealizationsRepository : IRealizationsRepository
{
  private readonly ApplicationDBContext _dbContext;
  public RealizationsRepository(ApplicationDBContext dbContext)
  {
    _dbContext = dbContext;
  }

  public async Task<Realization> CreateAsync(Realization realization)
  {
    await _dbContext.Realizations.AddAsync(realization);
    await _dbContext.SaveChangesAsync();
    return realization;
  }

    public Task DeleteAsync(Realization realization)
    {
        throw new NotImplementedException();
    }

    public Task<List<Realization>> GetAllByHabitIdAsync(Guid habitId)
    {
        throw new NotImplementedException();
    }

    public async Task<Realization> GetByIdAsync(Guid id)
  {
    return await _dbContext.Realizations.FindAsync(id);
  }

    Task<Realization> IRealizationsRepository.GetByIdAsync(Guid id)
    {
        throw new NotImplementedException();
    }
}