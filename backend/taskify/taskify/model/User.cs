using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public byte[] Profile { get; set; } = null!;
        public string JobTitle { get; set; } = null!;
        public byte[] Features { get; set; } = null!;

        public int RoleId { get; set; }
        public virtual Role Role { get; set; }

        public int DepartmentId { get; set; }
        public virtual Department Department { get; set; }

    }
}
