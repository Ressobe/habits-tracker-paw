using backend.Dtos.Categories;
using backend.Exceptions;
using backend.Filters;
using backend.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[Route("api/categories")]
[ApiController]
[Authorize]
public class CategoriesController(ICategoriesService categoriesService) : ControllerBase
{
  private readonly ICategoriesService _categoriesService = categoriesService;

  /// <summary>
  /// Create new category
  /// </summary>
  /// <param name="toCreateCategory"></param>
  /// <returns></returns>
  [HttpPost]
  [AuthorizeUser]
  [ProducesResponseType(typeof(Guid), StatusCodes.Status201Created)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async Task<ActionResult> CreateCategory([FromBody] CreateCategoryDto toCreateCategory)
  {
    if (!ModelState.IsValid) {
      return BadRequest(ModelState);
    }
    var userId = HttpContext.Items["UserId"] as string;
    try {
      var categoryId = await _categoriesService.CreateCategoryAsync(toCreateCategory, userId);
      return CreatedAtAction(nameof(CreateCategory), new { id = categoryId }, categoryId);
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }

  /// <summary>
  /// Get all categories created by user
  /// </summary>
  /// <returns></returns>
  [HttpGet]
  [AuthorizeUser]
  [ProducesResponseType(typeof(List<CategoryDto>), StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async Task<IActionResult> GetAll()
  {
    var userId = HttpContext.Items["UserId"] as string;
    try {
      var categories = await _categoriesService.GetAllCategoriesByUserIdAsync(userId);
      return Ok(categories);
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }

  /// <summary>
  /// Update category by id
  /// </summary>
  /// <param name="id"></param>
  /// <param name="toUpdateCategory"></param>
  /// <returns></returns>
  [HttpPut("{id:guid}")]
  [AuthorizeUser]
  [ProducesResponseType(typeof(Guid), StatusCodes.Status200OK)]
  [ProducesResponseType(StatusCodes.Status400BadRequest)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async Task<IActionResult> UpdateCategory([FromRoute] Guid id, [FromBody] UpdateCategoryDto toUpdateCategory)
  {
    if (!ModelState.IsValid) {
      return BadRequest(ModelState);
    }
    var userId = HttpContext.Items["UserId"] as string;
    try {
      var categoryId = await _categoriesService.UpdateCategoryAsync(id, toUpdateCategory, userId);
      return Ok(categoryId);
    }
    catch (CategoryNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }

  /// <summary>
  /// Delete category by id
  /// </summary>
  /// <param name="id"></param>
  /// <returns></returns>
  [HttpDelete("{id:guid}")]
  [AuthorizeUser]
  [ProducesResponseType(StatusCodes.Status204NoContent)]
  [ProducesResponseType(StatusCodes.Status401Unauthorized)]
  [ProducesResponseType(StatusCodes.Status404NotFound)]
  [ProducesResponseType(StatusCodes.Status500InternalServerError)]
  public async Task<IActionResult> DeleteCategory([FromRoute] Guid id)
  {
    var userId = HttpContext.Items["UserId"] as string;
    try {
      await _categoriesService.DeleteCategoryAsync(id, userId);
      return NoContent();
    }
    catch (CategoryNotFoundException ex) {
      return NotFound(new { message = ex.Message });
    }
    catch (Exception ex) {
      return StatusCode(500, ex.Message);
    }
  }
}