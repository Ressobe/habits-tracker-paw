using backend.Models;

namespace backend.Interfaces;

public interface IHabitsRepository
{
  Task<Guid> CreateAsync(Habit habit);
  Task<Habit?> GetByIdAsync(Guid id, string userId);
  Task<Guid> UpdateAsync(Habit habit);
  Task<List<Habit>> GetAllByUserIdAsync(string userId);
}