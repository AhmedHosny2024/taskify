namespace taskify.model.Dto
{
    public class UpdatedTask
    {
        public int Id { get; set; }
        public string Title { get; set; } = null!;
        public string Disc { get; set; } = null!;
        public string Category { get; set; } = null!;
        public int TaskStatusId { get; set; }


    }
}
