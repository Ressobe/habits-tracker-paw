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
      Priority = createHabitDto.Priority
    };
  }
  public static HabitDto ToHabitDto(this Habit habit)
  {
    return new HabitDto
    {
      Id = habit.Id,
      Name = habit.Name,
      Description = habit.Description,
      Priority = habit.Priority,
      CreatedAt = habit.CreatedAt
    };
  }
}