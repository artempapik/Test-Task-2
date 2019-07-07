using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore;

namespace Test_Task_2
{
	public class Program
	{
		public static void Main(string[] args) => WebHost
			.CreateDefaultBuilder(args)
			.UseStartup<Startup>()
			.Build()
			.Run();
	}
}