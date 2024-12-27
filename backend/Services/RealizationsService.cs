using backend.Exceptions;
using backend.Interfaces;
using backend.Models;

namespace backend.Services;

public class RealizationsService(IRealizationsRepository realizationsRepo, IHabitsRepository habitsRepo) : IRealizationsService
{
  private readonly IRealizationsRepository _realizationsRepo = realizationsRepo;
  private readonly IHabitsRepository _habitsRepo = habitsRepo;
  public async Task<Guid> CreateRealizationAsync(Guid habitId, string userId)
  {
    var habit = _habitsRepo.GetByIdAsync(habitId, userId);
    if (habit is null) {
      throw new HabitNotFoundException("Habit not found");
    }
    var realization = new Realization {
      HabitId = habitId
    };
    await _realizationsRepo.CreateAsync(realization);
    return realization.Id;
  }
  public async Task DeleteRealizationByIdAsync(Guid habitId, Guid realizationId, string userId)
  {
    var habit = _habitsRepo.GetByIdAsync(habitId, userId);
    if (habit is null) {
      throw new HabitNotFoundException("Habit not found");
    }
    var realization = await _realizationsRepo.GetByIdAsync(realizationId);
    if (realization is null) {
      throw new RealizationNotFoundException("Realization not found");
    }
    if (realization.HabitId != habitId) {
      throw new RealizationNotFoundException("Realization not found");
    }
    await _realizationsRepo.DeleteAsync(realization);
  }
}