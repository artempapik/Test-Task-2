using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Test_Task_2.Models;
using System.Linq;
using System;

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

		[HttpGet("categories")]
		public IEnumerable<string> GetCategories() => Enum.GetNames(typeof(CategoryType)).Cast<string>();

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