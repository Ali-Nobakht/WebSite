using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebSite.Entity.Models
{

    [Table("Tour")]
    public class TourModel : BaseEntity
    {
		public int TourTreeId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }

    }
}
