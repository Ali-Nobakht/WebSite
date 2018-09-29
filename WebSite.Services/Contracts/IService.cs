using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebSite.Entity.Models;

namespace WebSite.Services.Contracts {
    public interface IService<TModel> {
        Task<bool> AddAsync (TModel tour);
        Task<bool> UpdateAsync (TModel tour);
        Task<bool> SaveAsync (TModel tour);
        Task<bool> DeleteAsync (int id);
        Task<IEnumerable<TModel>> ListAsync ();
        Task<TModel> ModelAsync (int id);
        Task<bool> SaveAllChangesAsync();
    }
}