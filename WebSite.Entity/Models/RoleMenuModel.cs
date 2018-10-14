using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebSite.Entity.Models
{
	[Table("RoleMenu")]
	public class RoleMenuModel :BaseEntity
	{
		public int RoleId { get; set; }
		public int MenuId { get; set; }
	}
}
