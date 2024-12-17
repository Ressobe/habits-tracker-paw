using backend.Data;
using backend.Interfaces;
using backend.Models;

namespace backend.Repositories;

public class HabitsRepository(ApplicationDBContext context) : IHabitsRepository
{
  private readonly ApplicationDBContext _context = context;

    public async Task<Guid> CreateAsync(Habit habit)
    {
      await _context.Habits.AddAsync(habit);
      await _context.SaveChangesAsync();
      return habit.Id;
    }
}