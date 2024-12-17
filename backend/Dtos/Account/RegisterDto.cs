using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Account
{
    public class RegisterDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "username must be at least 5 characters")]
        [MaxLength(30, ErrorMessage = "username must be at most 30 characters")]
        public string Username { get; set; } = string.Empty;
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;
        [Required]
        [MinLength(2, ErrorMessage = "first name must be at least 2 characters")]
        [MaxLength(30, ErrorMessage = "first name must be at most 30 characters")]
        public string FirstName { get; set; } = string.Empty;
        [Required]
        [MinLength(2, ErrorMessage = "last name must be at least 2 characters")]
        [MaxLength(30, ErrorMessage = "last name must be at most 30 characters")]
        public string LastName { get; set; } = string.Empty;
    }
}