using backend.Dtos.Habits;
using backend.Filters;
using backend.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/habits")]
[Authorize]
public class HabitsController : ControllerBase
{
  private readonly IHabitsService _habitsService;
  public HabitsController(IHabitsService habitsService)
  {
    _habitsService = habitsService;
  }

  /// <summary>
  /// Create new habit
  /// </summary>
  /// <param name="createHabitDto"></param>
  /// <returns></returns>
  [HttpPost]
  [AuthorizeUser]
  [ProducesResponseType(typeof(Guid), StatusCodes.Status201Created)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async Task<IActionResult> CreateHabit([FromBody] CreateHabitDto createHabitDto)
  {
    if (!ModelState.IsValid) {
      return BadRequest(ModelState);
    }
    var userId = HttpContext.Items["UserId"] as string;
    try {
      var createdHabitId = await _habitsService.CreateHabitAsync(createHabitDto, userId);
      return CreatedAtAction(nameof(CreateHabit), new { id = createdHabitId }, null);
    }
    catch (Exception ex)
    {
      return StatusCode(500, ex.Message);
    }
  }
}