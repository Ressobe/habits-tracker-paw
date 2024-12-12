using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Account
{
    public class RegisterDto
    {
        [Required]
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