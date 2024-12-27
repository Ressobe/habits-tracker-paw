namespace backend.Interfaces;

public interface IRealizationsService
{
  Task<Guid> CreateRealizationAsync(Guid habitId, string userId);
  Task DeleteRealizationByIdAsync(Guid habitId, Guid realizationId, string userId);
}