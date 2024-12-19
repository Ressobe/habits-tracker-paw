using backend.Repositories;
using backend.Dtos.Habits;
using backend.Interfaces;
using backend.Mappers;
using backend.Exceptions;

namespace backend.Services;

public class HabitsService : IHabitsService
{
  private readonly IHabitsRepository _habitRepo;
  private readonly ICategoriesRepository _categoriesRepo;
  public HabitsService(IHabitsRepository habitRepo, ICategoriesRepository categoriesRepo)
  {
    _habitRepo = habitRepo;
    _categoriesRepo = categoriesRepo;
  }

  public async Task<Guid> CreateHabitAsync(CreateHabitDto toCreateHabit, string userId)
  {
    var habit = toCreateHabit.ToHabitFromDto();
    if (habit.CategoryId is not null) {
      var category = await _categoriesRepo.GetByIdAsync((Guid)habit.CategoryId, userId);
      if (category is null) {
        throw new CategoryNotFoundException("Category not found");
      }
      habit.CategoryId = category.Id;
    }
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
    if (updateHabitDto.Name is not null) {
      habit.Name = updateHabitDto.Name;
    }
    if (updateHabitDto.Description is not null) {
      habit.Description = updateHabitDto.Description;
    }
    if (updateHabitDto.Priority is not null) {
      habit.Priority = (int)updateHabitDto.Priority;
    }
    if (updateHabitDto.CategoryId is null) {
      habit.CategoryId = null;
    }
    else {
      if (habit.CategoryId != updateHabitDto.CategoryId) {
        var category = await _categoriesRepo.GetByIdAsync((Guid)updateHabitDto.CategoryId, userId);
        if (category is null) {
          throw new CategoryNotFoundException("Category not found");
        }
        habit.CategoryId = category.Id;
      }
    }
    await _habitRepo.UpdateAsync(habit);

    return habit.Id;
  }
}