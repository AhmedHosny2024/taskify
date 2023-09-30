using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model.Dto
{
    public class UserDto
    {
        public string Name { get; set; } = null!;

        public string Image { get; set; }=null!;

       /* public byte[] Features { get; set; } = null!;*/

        public int RoleId { get; set; }

        public int DepartmentId { get; set; }
        public string JobTitle { get; set; } = null!;

    }
}
