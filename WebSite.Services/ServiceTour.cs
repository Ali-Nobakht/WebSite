using System;
using System.Collections.Generic;
using System.Linq;
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

        public bool AddTour (TourModel tour) {
            _tour.Add (tour);
            return true;
        }
        public List<TourModel> ListTour () {
            return _tour.ToList ();
        }
    }
}