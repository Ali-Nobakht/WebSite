using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace WebSite.Entity.Models
{
	[Table("Role")]
	public	class RoleModel : BaseEntity
	{
		public string Name { get; set; }
	
	}
}
