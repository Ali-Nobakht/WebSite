using System;
using WebSite.Entity.Models;
using System.Collections.Generic;

namespace WebSite.Services.Contracts
{
    public interface IServiceTour
    {
     bool AddTour (TourModel tour);
        List<TourModel>  ListTour();

     
    }
}
