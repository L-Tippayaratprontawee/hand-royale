using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace paper_scissors_rock_battle.GraphQL.Matches
{
    public record AddMatchInput (
        string Result,
        string OpponentName,
        string OpponentImageURL);
}
