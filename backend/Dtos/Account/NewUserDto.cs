using System.ComponentModel.DataAnnotations;

namespace backend.Dtos.Account
{
    public class NewUserDto
    {
        [Required]
        public string UserName { get; set; } = string.Empty;
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Token { get; set; } = string.Empty;
    }
}