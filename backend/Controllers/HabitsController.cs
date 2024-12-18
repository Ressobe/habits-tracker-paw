using backend.Dtos.Habits;
using backend.Exceptions;
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
      return CreatedAtAction(nameof(CreateHabit), new { id = createdHabitId }, createdHabitId);
    }
    catch (Exception ex)
    {
      return StatusCode(500, ex.Message);
    }
  }

  /// <summary>
  /// Get habit by id
  /// </summary>
  /// <param name="id"></param>
  /// <returns></returns>
  [HttpGet("{id:guid}")]
  [AuthorizeUser]
  [ProducesResponseType(typeof(HabitDto), StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async Task<IActionResult> GetById([FromRoute] Guid id)
  {
    if (!ModelState.IsValid) {
      return BadRequest(ModelState);
    }
    var userId = HttpContext.Items["UserId"] as string;
    try {
      var habit = await _habitsService.GetHabitByIdAsync(id, userId);
      return Ok(habit);
    }
    catch (HabitNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }

  /// <summary>
  /// Update habit by id
  /// </summary>
  /// <param name="id"></param>
  /// <param name="updateHabitDto"></param>
  /// <returns></returns>
  [HttpPut("{id:guid}")]
  [AuthorizeUser]
  [ProducesResponseType(typeof(Guid),StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async Task<IActionResult> UpdateHabit([FromRoute] Guid id, [FromBody] UpdateHabitDto updateHabitDto)
  {
    if (!ModelState.IsValid) {
      return BadRequest(ModelState);
    }
    var userId = HttpContext.Items["UserId"] as string;
    try {
      await _habitsService.UpdateHabitAsync(id, updateHabitDto, userId);
      return Ok("Habit updated successfully");
    }
    catch (HabitNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }
}