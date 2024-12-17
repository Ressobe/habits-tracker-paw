using backend.Models;

namespace backend.Interfaces;

public interface IHabitsRepository
{
  Task<Guid> CreateAsync(Habit habit);
}