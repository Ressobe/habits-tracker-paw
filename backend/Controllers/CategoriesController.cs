using backend.Dtos.Categories;
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
}