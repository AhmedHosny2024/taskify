using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model.Dto
{
    public class AttendanceDto
    {
        [Required]
        [NotNull]
        [MaxLength(80)]
        public string Date { get; set; }
        [Required]
        [NotNull]
        [ForeignKey("Users")]
        public int UserId { get; set; }
    }
}
