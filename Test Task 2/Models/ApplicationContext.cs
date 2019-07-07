using Microsoft.EntityFrameworkCore;

namespace Test_Task_2.Models
{
	public class ApplicationContext : DbContext
	{
		public ApplicationContext() : base() => Database.EnsureCreated();

		public DbSet<Product> Products { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) =>
			optionsBuilder.UseSqlServer(@"Server=(localdb)\MSSQLLocalDB;Database=productsdb;Trusted_Connection=True;");

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Product>().HasData
			(
				new[]
				{
					new Product
					{
						Id = 1,
						Name = "Genri Chinaski",
						Category = CategoryType.Text
					},
					new Product
					{
						Id = 2,
						Name = "Linkin Park",
						Category = CategoryType.Music
					},
					new Product
					{
						Id = 3,
						Name = "Saw",
						Category = CategoryType.Video
					}
				}
			);
			base.OnModelCreating(modelBuilder);
		}
	}
}