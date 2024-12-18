using backend.Repositories;
using backend.Dtos.Habits;
using backend.Interfaces;
using backend.Mappers;
using backend.Exceptions;

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

  public async Task<HabitDto> GetHabitByIdAsync(Guid id, string userId)
  {
    var habit = await _habitRepo.GetByIdAsync(id, userId);

    if (habit is null) {
      throw new HabitNotFoundException("Habit not found");
    }
    return habit.ToHabitDto();
  }

    public async Task<Guid> UpdateHabitAsync(Guid id, UpdateHabitDto updateHabitDto, string userId)
    {
      var habit = await _habitRepo.GetByIdAsync(id, userId);
      if (habit is null) {
        throw new HabitNotFoundException("Habit not found");
      }
      habit.Name = updateHabitDto.Name;
      habit.Description = updateHabitDto.Description;
      habit.Priority = updateHabitDto.Priority;

      await _habitRepo.UpdateAsync(habit);

      return habit.Id;
    }
}