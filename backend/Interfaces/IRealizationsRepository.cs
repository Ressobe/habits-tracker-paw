using backend.Models;

namespace backend.Interfaces;

public interface IRealizationsRepository
{
  Task<Realization> CreateAsync(Realization realization);
  Task<Realization> GetByIdAsync(Guid id);
  Task<List<Realization>> GetAllByHabitIdAsync(Guid habitId);
  Task DeleteAsync(Realization realization);
}