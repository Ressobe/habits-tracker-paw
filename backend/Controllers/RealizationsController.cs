using backend.Exceptions;
using backend.Filters;
using backend.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/realizations")]
[Authorize]
public class RealizationsController(IRealizationsService realizationsService) : ControllerBase
{
  private readonly IRealizationsService _realizationsService = realizationsService;

  [HttpPost("{habitId:guid}")]
  [AuthorizeUser]
  [ProducesResponseType(StatusCodes.Status204NoContent)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async Task<IActionResult> CreateRealization([FromRoute] Guid habitId)
  {
    var userId = HttpContext.Items["UserId"] as string;
    try {
      await _realizationsService.CreateRealizationAsync(habitId, userId);
      return NoContent();
    }
    catch (HabitNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }
  [HttpDelete("{habitId:guid}/{realizationId:guid}")]
  [AuthorizeUser]
  public async Task<IActionResult> DeleteRealization([FromRoute] Guid habitId, [FromRoute] Guid realizationId)
  {
    var userId = HttpContext.Items["UserId"] as string;
    try {
      await _realizationsService.DeleteRealizationByIdAsync(habitId, realizationId, userId);
      return NoContent();
    }
    catch (HabitNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (RealizationNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }
}