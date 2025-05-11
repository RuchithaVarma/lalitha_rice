using LalithaRiceWeb.Models;

namespace LalithaRiceWeb.Services
{
    public class ProductService
    {
        private readonly List<Product> _products = new List<Product>
        {
            new Product
            {
                Id = 1,
                Name = "Premium Basmati Rice",
                Description = "Long-grain aromatic rice with exceptional taste",
                Price = 99.99M,
                ImageUrl = "/images/basmati.jpg",
                Category = "Premium",
                IsAvailable = true,
                Weight = "5 kg"
            },
            new Product
            {
                Id = 2,
                Name = "Sona Masoori Rice",
                Description = "Medium-grain rice perfect for daily consumption",
                Price = 79.99M,
                ImageUrl = "/images/sona-masoori.jpg",
                Category = "Classic",
                IsAvailable = true,
                Weight = "10 kg"
            },
            new Product
            {
                Id = 3,
                Name = "Brown Rice",
                Description = "Nutritious whole grain rice",
                Price = 89.99M,
                ImageUrl = "/images/brown-rice.jpg",
                Category = "Healthy",
                IsAvailable = true,
                Weight = "5 kg"
            }
        };

        public IEnumerable<Product> GetAllProducts() => _products;

        public Product GetProductById(int id) => _products.FirstOrDefault(p => p.Id == id);
    }
}
