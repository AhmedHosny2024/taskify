using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
    }
}
