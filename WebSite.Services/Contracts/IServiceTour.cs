using System;
using System.Collections.Generic;
using WebSite.Entity.Models;
using System.Threading.Tasks;

namespace WebSite.Services.Contracts {
    public interface IServiceTour {
        Task<bool> AddTourAsync (TourModel tour);
        bool UpdateTour (TourModel tour);
        Task<bool> SaveTourAsync (TourModel tour);

       Task<bool> DeleteTourAsunc (int id);
        IEnumerable<TourModel> GetTours ();

        Task<TourModel> GetTourAsync(int Id);

    }
}