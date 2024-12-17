using backend.Dtos.Habits;

namespace backend.Interfaces;

public interface IHabitsService
{
  Task<Guid> CreateHabitAsync(CreateHabitDto toCreateHabit, string userId);
}