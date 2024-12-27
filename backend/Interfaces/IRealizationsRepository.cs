using backend.Models;

namespace backend.Interfaces;

public interface IRealizationsRepository
{
  Task<Realization> CreateAsync(Realization realization);
  Task<Realization?> GetByIdAsync(Guid id, string userId);
  Task DeleteAsync(Realization realization);
}