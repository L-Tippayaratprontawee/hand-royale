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
        public string Result { get; set; } = null!;
        [Required]
        public int PlayerId { get; set; }
        public Player Player { get; set; } = null!;

        //        [Required]
        //        public string Name { get; set; }
        //        [Required]
        //        public string ImageURL { get; set; }

    }
}
