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
  public async Task<List<Habit>> GetAllByUserIdAsync(string userId)
  {
    return await _context.Habits.Where(u => u.CreatedById == userId)
      .ToListAsync();
  }
    public async Task<Habit?> GetByIdAsync(Guid id, string userId)
  {
    return await _context.Habits
      .Where(x => x.CreatedById == userId)
      .FirstOrDefaultAsync(h => h.Id == id);
  }
  public async Task<Guid> UpdateAsync(Habit habit)
  {
    _context.Entry(habit).State = EntityState.Modified;
    await _context.SaveChangesAsync();
    return habit.Id;
  }
}