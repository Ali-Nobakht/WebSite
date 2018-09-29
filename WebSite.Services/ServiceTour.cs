using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebSite.Dal;
using WebSite.Entity.Models;
using WebSite.Services.Contracts;

namespace Website.Services {
    public class TourService : ITourService {
        private readonly DbSet<TourModel> _tour;
        private readonly IUnitOfWork _unitOfWork;

        public TourService (IUnitOfWork unitOfWork) {
            _unitOfWork = unitOfWork;
            _tour = unitOfWork.Set<TourModel> ();
        }
        public async Task<bool> AddAsync (TourModel tour) {
            await _tour.AddAsync (tour);
            return true;
        }

        public async Task<bool> UpdateAsync (TourModel tour) {
            var model = await _tour.FirstOrDefaultAsync (x => x.Id == tour.Id);
            if (model == null)
                return false;
            _unitOfWork.Entry (model).CurrentValues.SetValues (tour);
            return true;
        }

        public async Task<bool> SaveAsync (TourModel tour) {
            if (tour.Id > 0)
                return await UpdateAsync (tour);
            else
                return await AddAsync (tour);
        }

        public async Task<bool> DeleteAsync (int id) {
            var tour = await _tour.FirstOrDefaultAsync (x => x.Id == id);
            if (tour == null)

                return false;

            _tour.Remove (tour);

            return true;
        }

        public async Task<IEnumerable<TourModel>> ListAsync () {
            return await _tour.ToListAsync ();
        }

        public async Task<TourModel> ModelAsync (int id) {
            return await _tour.FirstOrDefaultAsync (x => x.Id == id);
        }

    }
}