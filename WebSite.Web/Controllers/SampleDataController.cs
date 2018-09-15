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
        private readonly IServiceTour _sericeTuor;
        private readonly IUnitOfWork _unitOfWork;
        public SampleDataController (IServiceTour sericeTuor, IUnitOfWork unitOfWork) {
            Console.WriteLine ("--------------------------------");
            Console.WriteLine ("--------------------------------");

            _sericeTuor = sericeTuor;
            _unitOfWork = unitOfWork;
            var tour = new TourModel {
                Title = "Title",
                Description = "Description",
                //   DatePunch=DateTime.Now,
                RecordStatusId = 1
            };
            _sericeTuor.AddTour (tour);
            _unitOfWork.SaveAllChanges ();

            var c = _sericeTuor.ListTour ();
            if (c.Any ())
                Console.WriteLine (c.First ().Title);

            else
                Console.WriteLine ("ISNULL ISNULL ISNULL ISNULL ISNULL ISNULL ISNULL ISNULL ISNULL ");

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
            var test = "";
            var c = _sericeTuor.ListTour ();
            if (c.Any ())
                test = c.First ().Title;
            var rng = new Random ();
            return Enumerable.Range (1, 5).Select (index => new WeatherForecast {
                DateFormatted = DateTime.Now.AddDays (index).ToString ("d"),
                    TemperatureC = rng.Next (-20, 55),
                    Summary = Summaries[rng.Next (Summaries.Length)] + " - " + test
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