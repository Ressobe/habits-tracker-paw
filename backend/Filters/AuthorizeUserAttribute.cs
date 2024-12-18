using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace backend.Filters;

public class AuthorizeUserAttribute : ActionFilterAttribute
{
  public override async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
  {
    var userId = context.HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

    if (string.IsNullOrWhiteSpace(userId)) {
      context.Result = new UnauthorizedObjectResult("User not authenticated");
      return;
    }

    context.HttpContext.Items["UserId"] = userId;
    await next();
  }
}