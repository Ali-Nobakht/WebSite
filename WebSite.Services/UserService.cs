using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebSite.Dal;
using WebSite.Entity.Models;
using WebSite.Services.Contracts;

namespace Website.Services {
    public class UserService : IUserService {
        private readonly DbSet<UserModel> _user;
        private readonly IUnitOfWork _unitOfWork;

        public UserService (IUnitOfWork unitOfWork) {
            _unitOfWork = unitOfWork;
            _user = unitOfWork.Set<UserModel> ();
        }
        public async Task<bool> AddAsync (UserModel user) {
            await _user.AddAsync (user);
            return true;
        }

        public async Task<bool> UpdateAsync (UserModel user) {
            var model = await _user.FirstOrDefaultAsync (x => x.Id == user.Id);
            if (model == null)
                return false;
            _unitOfWork.Entry (model).CurrentValues.SetValues (user);
            return true;
        }

        public async Task<bool> SaveAsync (UserModel user) {
            if (user.Id > 0)
                return await UpdateAsync (user);
            else
                return await AddAsync (user);
        }

        public async Task<bool> DeleteAsync (int id) {
            var user = await _user.FirstOrDefaultAsync (x => x.Id == id);
            if (user == null)

                return false;

            _user.Remove (user);

            return true;
        }

        public async Task<IEnumerable<UserModel>> ListAsync () {
            return await _user.ToListAsync ();
        }

        public async Task<UserModel> ModelAsync (int id) {
            return await _user.FirstOrDefaultAsync (x => x.Id == id);
        }

        public async Task<bool> SaveAllChangesAsync()
        {
           await _unitOfWork.SaveAllChangesAsync();
           return true;
        }
    }
}