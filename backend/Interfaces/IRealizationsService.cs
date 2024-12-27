namespace backend.Interfaces;

public interface IRealizationsService
{
  Task<Guid> CreateRealizationAsync(Guid habitId, string userId);
  Task DeleteRealizationByIdAsync(Guid Id, string userId);
}