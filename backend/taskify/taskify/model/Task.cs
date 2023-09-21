using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model
{
    public class MyTask
    {

        public int Id { get; set; }

        public string Title { get; set; } = null!;

        public string Disc { get; set; }
        public string Category { get; set; } = null!;


        public string Date { get; set; } = null!;

        public int Task_StatusId { get; set; }

        public virtual Task_Status Task_Status { get; set; }

        public int UserId { get; set; }
        public virtual User User { get; set; }
    }
}
