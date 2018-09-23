using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebSite.Dal;
using WebSite.Entity.Models;
using WebSite.Services.Contracts;

namespace Website.Services {
    public class ServiceTour : IServiceTour {
        private readonly DbSet<TourModel> _tour;
        private readonly IUnitOfWork _unitOfWork;

        public ServiceTour (IUnitOfWork unitOfWork) {
            _unitOfWork = unitOfWork;
            _tour = unitOfWork.Set<TourModel> ();
        }

        public async Task<bool> AddTourAsync (TourModel tour) {
            await _tour.AddAsync (tour);
            return true;
        }
        public async Task<bool> UpdateTourAsync (TourModel tour) {
            var model = await _tour.FirstOrDefaultAsync (x => x.Id == tour.Id);
            if (model == null)
                return false;
            _unitOfWork.Entry (model).CurrentValues.SetValues (tour);
            return true;
        }
        public async Task<bool> SaveTourAsync (TourModel tour) {
            if (tour.Id > 0)
                return await UpdateTourAsync (tour);
            else
                return await AddTourAsync (tour);

        }
        public async Task<bool> DeleteTourAsunc (int id) {

            var tour = await _tour.FirstOrDefaultAsync (x => x.Id == id);
            if (tour == null)

                return false;

            _tour.Remove (tour);

            return true;

        }
        public IEnumerable<TourModel> GetTours () {
            return _tour.AsEnumerable ();
        }
        public async Task<TourModel> GetTourAsync (int id) {
            return await _tour.FirstOrDefaultAsync (x => x.Id == id);
        }
    }
}