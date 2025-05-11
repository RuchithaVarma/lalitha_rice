using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using LalithaRiceWeb.Models;
using LalithaRiceWeb.Services;

namespace LalithaRiceWeb.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly ProductService _productService;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
        _productService = new ProductService();
    }

    public IActionResult Index()
    {
        var products = _productService.GetAllProducts();
        return View(products);
    }

    public IActionResult Products()
    {
        var products = _productService.GetAllProducts();
        return View(products);
    }

    public IActionResult About()
    {
        return View();
    }

    public IActionResult Contact()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
