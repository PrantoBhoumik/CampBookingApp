using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BLL.Models
{
    public class CampModel
    {
        public int CampId { get; set; }
        public string CampName { get; set; }
        public int Rate { get; set; }
        public int Capacity { get; set; }
        public string Description { get; set; }

        public string Url { get; set; }

        public string Status { get; set; }


    }
}
