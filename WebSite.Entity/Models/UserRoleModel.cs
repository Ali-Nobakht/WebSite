using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebSite.Entity.Models
{
	[Table("UserRole")]
	public class UserRoleModel :BaseEntity
	{
		public string UserId { get; set; }
		public string RoleId { get; set; }
	}
}
