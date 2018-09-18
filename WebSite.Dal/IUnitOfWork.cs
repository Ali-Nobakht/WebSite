using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Storage;

namespace WebSite.Dal
{
    public interface IUnitOfWork : IDisposable
    {
        DbSet<TEntity> Set<TEntity>() where TEntity : class;
        int SaveAllChanges(bool invalidateCacheDependencies = true);
        Task<int> SaveAllChangesAsync(bool invalidateCacheDependencies = true);
        void MarkAsAdded<TEntity>(TEntity entity) where TEntity : class;
        void MarkAsChanged<TEntity>(TEntity entity) where TEntity : class;
        void MarkAsDeleted<TEntity>(TEntity entity) where TEntity : class;
        IList<T> GetRows<T>(string sql, params object[] parameters) where T : class;
        IEnumerable<TEntity> AddThisRange<TEntity>(IEnumerable<TEntity> entities) where TEntity : class;
       Task<int> ExecuteSqlCommandAsync (string query);


        EntityEntry<TEntity> Entry<TEntity>(TEntity entity) where TEntity : class;
    }
}