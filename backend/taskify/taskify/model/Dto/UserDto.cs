using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model.Dto
{
    public class UserDto
    {
        [Required]
        [NotNull]
        [MaxLength(30)]
        public string Name { get; set; }

        [Required]
        [NotNull]
        public byte[] Profile { get; set; }

        [NotNull]
        [Required]
        public byte[] Features { get; set; }

        [NotNull]
        [Required]
        public int RoleId { get; set; }

        [NotNull]
        [Required]
        public int DepartmentId { get; set; }

        [NotNull]
        [Required]
        [MaxLength(50)]
        public string JobTitle { get; set; }

    }
}
