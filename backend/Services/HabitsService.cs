using backend.Repositories;
using backend.Dtos.Habits;
using backend.Interfaces;
using backend.Mappers;

namespace backend.Services;

public class HabitsService : IHabitsService
{
  private readonly IHabitsRepository _habitRepo;
  public HabitsService(IHabitsRepository habitRepo)
  {
    _habitRepo = habitRepo;
  }

  public async Task<Guid> CreateHabitAsync(CreateHabitDto toCreateHabit, string userId)
  {
    var habit = toCreateHabit.ToHabitFromDto();
    habit.CreatedById = userId;
    return await _habitRepo.CreateAsync(habit);
  }
}