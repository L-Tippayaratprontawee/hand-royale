using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace paper_scissors_rock_battle.Model
{
    public class Player
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string ImageURL { get; set; }
        public ICollection<Match> Matches { get; set; } = new List<Match>();
    }
}
