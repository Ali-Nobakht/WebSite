using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebSite.Dal;
using WebSite.Entity.Models;
using WebSite.Services.Contracts;

namespace WebSite.Web.Controllers {
    [Route ("api/[controller]")]
    public class SampleDataController : Controller {
        private readonly ITourService _sericeTuor;
        private readonly IUnitOfWork _unitOfWork;
        public SampleDataController (ITourService sericeTuor, IUnitOfWork unitOfWork) {
  

            _sericeTuor = sericeTuor;
            _unitOfWork = unitOfWork;
           

        }
        private static string[] Summaries = new [] {
            "Freezing",
            "Bracing",
            "Chilly",
            "Cool",
            "Mild",
            "Warm",
            "Balmy",
            "Hot",
            "Sweltering",
            "Scorching"
        };

        [HttpGet ("[action]")]
        public IEnumerable<WeatherForecast> WeatherForecasts () {
          
            var rng = new Random ();
            return Enumerable.Range (1, 5).Select (index => new WeatherForecast {
                DateFormatted = DateTime.Now.AddDays (index).ToString ("d"),
                    TemperatureC = rng.Next (-20, 55),
                    Summary = Summaries[rng.Next (Summaries.Length)] 
            });
        }

        public class WeatherForecast {
            public string DateFormatted { get; set; }
            public int TemperatureC { get; set; }
            public string Summary { get; set; }

            public int TemperatureF {
                get {
                    return 32 + (int) (TemperatureC / 0.5556);
                }
            }
        }
    }
}