using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model
{
    public class Attendance
    {
        public int Id { get; set; }
        public string Date { get; set; } = null!;

        public int UserId { get; set; }
        public virtual User User { get; set; }


    }
}
