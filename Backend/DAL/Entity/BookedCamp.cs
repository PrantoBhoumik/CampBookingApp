using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Entity
{
    public class BookedCamp
    {
        [Key]
        public int Id { get; set; }
        public ulong RefId { get; set; }

        public string CampName { get; set; }
        public int CampId { get; set; }

        public int StayDays { get; set; }

        public int TotalBill { get; set; }
        public string BillingAddress { get; set; }
        public int ZipCode { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        
        public DateTime CheckinDate { get; set; }
        public DateTime CheckoutDate { get; set; }

        public ulong CellPhone { get; set; }
    }
}
