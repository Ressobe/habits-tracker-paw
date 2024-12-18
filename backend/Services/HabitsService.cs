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

  public async Task DeleteHabitByIdAsync(Guid id, string userId)
  {
    var toDelete = await _habitRepo.GetByIdAsync(id, userId);
    if (toDelete is null) {
      throw new HabitNotFoundException("Habit not found");
    }
    await _habitRepo.DeleteAsync(toDelete);
  }

  public async Task<List<HabitDto>> GetAllHabitsByUserIdAsync(string userId)
  {
    var habits = await _habitRepo.GetAllByUserIdAsync(userId);
    var habitsDto = habits.Select(h => h.ToHabitDto());
    return habitsDto.ToList();
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
    int countChanges = 0;
    if (updateHabitDto.Name is not null) {
      habit.Name = updateHabitDto.Name;
      countChanges++;
    }
    if (updateHabitDto.Description is not null) {
      habit.Description = updateHabitDto.Description;
      countChanges++;
    }
    if (updateHabitDto.Priority is not null) {
      habit.Priority = (int)updateHabitDto.Priority;
      countChanges++;
    }

    if (countChanges == 0) {
      throw new NothingToUpdateException("Nothing to update. Stop sending requests!");
    }

    await _habitRepo.UpdateAsync(habit);

    return habit.Id;
  }
}