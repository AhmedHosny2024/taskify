using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace taskify.model
{
    public class UserViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public string Image { get; set; } = null!;
        public string JobTitle { get; set; } = null!;
/*        public byte[] Features { get; set; } = null!;
*/
        public string Role { get; set; }

        public string Department { get; set; }

    }
}
