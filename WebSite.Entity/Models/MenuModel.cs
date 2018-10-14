using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebSite.Entity.Models
{
	[Table("Menu")]
	public	class MenuModel : BaseEntity
	{
		public int? ParentId { get; set; }
		public string Title { get; set; }
		public string Url { get; set; }
		public string Type { get; set; }



	}
}
