using backend.Data;
using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

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

  public async Task<Habit?> GetByIdAsync(Guid id, string userId)
  {
    return await _context.Habits
      .Where(x => x.CreatedById == userId)
      .FirstOrDefaultAsync(h => h.Id == id);
  }
}