using backend.Dtos.Habits;
using backend.Models;

namespace backend.Mappers;

public static class HabitsMapper
{
  public static Habit ToHabitFromDto(this CreateHabitDto createHabitDto)
  {
    return new Habit
    {
      Name = createHabitDto.Name,
      Description = createHabitDto.Description,
      Priority = createHabitDto.Priority,
      CategoryId = createHabitDto.CategoryId
    };
  }
  public static HabitDto ToHabitDto(this Habit habit)
  {
    var habitDto = new HabitDto
    {
      Id = habit.Id,
      Name = habit.Name,
      Description = habit.Description,
      Priority = habit.Priority,
      CreatedAt = habit.CreatedAt,
      Category = habit.Category?.ToCategoryDto()
    };
    var DateToday = DateTime.UtcNow.Date;
    foreach (var realization in habit.Realizations) {
      if (realization.Date.Date == DateToday) {
        habitDto.IsTodayDone = true;
        break;
      }
    }
    return habitDto;
  }
  public static HabitDetailedDto ToHabitDetailedDto(this Habit habit)
  {
    return new HabitDetailedDto
    {
      Id = habit.Id,
      Name = habit.Name,
      Description = habit.Description,
      Priority = habit.Priority,
      CreatedAt = habit.CreatedAt,
      Category = habit.Category?.ToCategoryDto(),
      Realizations = habit.Realizations.Select(r => r.ToRealizationDto()).ToList()
    };
  }
}