using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebSite.Entity.Models;

namespace WebSite.Dal {

    public class AppDbContext : DbContext, IUnitOfWork
    //IdentityDbContext<ApplicationUser, CustomRole, int, CustomUserLogin, CustomUserRole, CustomUserClaim>,

    {
        private static string ConnectionSp => new SqlConnectionStringBuilder {
            Password = "123",
                UserID = "sa",
                DataSource = @".\SQLEXPRESS",
                InitialCatalog = "WebSite",
        }.ConnectionString;
        protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) {

            optionsBuilder.UseSqlServer (ConnectionSp);
        }
        public DbSet<TourModel> Tours { get; set; }
        public DbSet<UserModel> Users {get;set;}

        protected override void OnModelCreating (ModelBuilder builder) {

            //builder.ApplyConfiguration(new ProductConfig());

            //base.OnModelCreating(builder);

        }

        public new DbSet<TEntity> Set<TEntity> () where TEntity : class {
            return base.Set<TEntity> ();
        }

        public int SaveAllChanges (bool invalidateCacheDependencies) {
            return SaveChanges (invalidateCacheDependencies);
        }

        public async Task<int> SaveAllChangesAsync (bool invalidateCacheDependencies) {
            return await SaveChangesAsync (invalidateCacheDependencies);
        }

        public int SaveChanges (bool invalidateCacheDependencies) {
            //  var changedEntityNames = this.GetChangedEntityNames();
            var result = base.SaveChanges ();
            //if (invalidateCacheDependencies)
            //{
            //    new EFCacheServiceProvider().InvalidateCacheDependencies(changedEntityNames);
            //}
            return result;
        }

        public async Task<int> SaveChangesAsync (bool invalidateCacheDependencies) {
            //    var changedEntityNames = this.GetChangedEntityNames();
            var result = await base.SaveChangesAsync ();
            //if (invalidateCacheDependencies)
            //{
            //    new EFCacheServiceProvider().InvalidateCacheDependencies(changedEntityNames);
            //}
            return result;
        }

        public void MarkAsAdded<TEntity> (TEntity entity) where TEntity : class {
            Entry (entity).State = EntityState.Added;
        }
        public void MarkAsDeleted<TEntity> (TEntity entity) where TEntity : class {
            Entry (entity).State = EntityState.Deleted;
        }

        public IEnumerable<TEntity> AddThisRange<TEntity> (IEnumerable<TEntity> entities) where TEntity : class {
            Set<TEntity> ().AddRange (entities);

            return Set<TEntity> ();
        }

        public void MarkAsChanged<TEntity> (TEntity entity) where TEntity : class {
            Entry (entity).State = EntityState.Modified;
        }

        public IList<TEntity> GetRows<TEntity> (string sql, params object[] parameters) where TEntity : class {
            return Set<TEntity> ().FromSql (sql, parameters).ToList ();
        }

        public async Task<int> ExecuteSqlCommandAsync (string query) {
            return await base.Database.ExecuteSqlCommandAsync (query);
        }

    }
}