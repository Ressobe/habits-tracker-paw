using backend.Dtos.Realizations;
using backend.Models;

namespace backend.Mappers;

public static class RealizationsMapper
{
  public static RealizationDto ToRealizationDto(this Realization realization)
  {
    return new RealizationDto
    {
      Id = realization.Id,
      Date = realization.Date
    };
  }
}