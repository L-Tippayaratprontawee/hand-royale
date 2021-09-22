using HotChocolate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using paper_scissors_rock_battle.Model;
using paper_scissors_rock_battle.Data;
using HotChocolate.Types;

namespace paper_scissors_rock_battle.GraphQL.Matches
{
    [ExtendObjectType(name: "Query")]
    public class MatchQueries
    {
        public IQueryable<Match> GetMatches([ScopedService] AppDbContext context)
        {
            return context.Matches;
        }
    }
}
