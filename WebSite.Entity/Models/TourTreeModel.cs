using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebSite.Entity.Models
{
	[Table("Tour")]
	public class TourTreeModel : BaseEntity
	{
		public int? ParentId { get; set; }
		public string Name { get; set; }
		public bool AllowTour { get; set; }
	}
}
