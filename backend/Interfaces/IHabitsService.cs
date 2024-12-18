using backend.Dtos.Habits;
using backend.Models;

namespace backend.Interfaces;

public interface IHabitsService
{
  Task<Guid> CreateHabitAsync(CreateHabitDto toCreateHabit, string userId);
  Task<HabitDto> GetHabitByIdAsync(Guid id, string userId);
}