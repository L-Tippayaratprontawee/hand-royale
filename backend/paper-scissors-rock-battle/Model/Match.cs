using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace paper_scissors_rock_battle.Model
{
    public class Match
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Result { get; set; }
        [Required]
        public string OpponentName { get; set; }
        [Required]
        public string OpponentImageURL { get; set; }
    }
}
