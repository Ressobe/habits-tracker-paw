using backend.Exceptions;
using backend.Filters;
using backend.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/realizations")]
[Authorize]
[ProducesResponseType(StatusCodes.Status401Unauthorized)]
[ProducesResponseType(StatusCodes.Status500InternalServerError)]
public class RealizationsController(IRealizationsService realizationsService) : ControllerBase
{
  private readonly IRealizationsService _realizationsService = realizationsService;

  /// <summary>
  /// Create realization
  /// </summary>
  /// <param name="habitId"></param>
  /// <returns></returns>
  [HttpPost("{habitId:guid}")]
  [AuthorizeUser]
  [ProducesResponseType(StatusCodes.Status204NoContent)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  public async Task<IActionResult> CreateRealization([FromRoute] Guid habitId)
  {
    var userId = HttpContext.Items["UserId"] as string;
    try {
      return Ok(await _realizationsService.CreateRealizationAsync(habitId, userId));
    }
    catch (HabitNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }

  /// <summary>
  /// Delete realization by id
  /// </summary>
  /// <param name="habitId"></param>
  /// <param name="realizationId"></param>
  /// <returns></returns>
  [HttpDelete("{id:guid}")]
  [AuthorizeUser]
  [ProducesResponseType(StatusCodes.Status204NoContent)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  public async Task<IActionResult> DeleteRealization([FromRoute] Guid Id)
  {
    var userId = HttpContext.Items["UserId"] as string;
    try {
      await _realizationsService.DeleteRealizationByIdAsync(Id, userId);
      return NoContent();
    }
    catch (RealizationNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }
}