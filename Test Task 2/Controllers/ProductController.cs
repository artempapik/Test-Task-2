using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Test_Task_2.Models;
using System.Linq;

namespace Test_Task_2.Controllers
{
	[Route("api/products")]
	public class ProductController : Controller
	{
		[HttpGet]
		public IEnumerable<Product> GetProducts()
		{
			using (var db = new ApplicationContext())
			{
				return db.Products
					.ToList();
			}
		}

		[HttpPost]
		public IActionResult Post([FromBody]Product product)
		{
			using (var db = new ApplicationContext())
			{
				db.Products.Add(product);
				db.SaveChanges();
				return Ok(product);
			}
		}
	}
}