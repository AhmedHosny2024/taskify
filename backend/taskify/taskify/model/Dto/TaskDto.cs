using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model.Dto
{
    public class TaskDto
    {
        [Required]
        [NotNull]
        [MaxLength(100)]
        public string Title { get; set; }

        [Required]
        [NotNull]
        [MaxLength(200)]
        public string Disc { get; set; }

        [Required]
        [NotNull]
        [MaxLength(20)]
        public string Category { get; set; }

        [Required]
        [NotNull]
        [MaxLength(80)]
        public string Date { get; set; }

        [Required]
        [NotNull]
        public int TaskStatusId { get; set; }

        [Required]
        [NotNull]
        [ForeignKey("Users")]
        public int UserId { get; set; }
    }
}
