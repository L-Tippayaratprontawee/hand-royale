using HotChocolate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using paper_scissors_rock_battle.Model;
using paper_scissors_rock_battle.Data;
using HotChocolate.Types;
using HotChocolate.Data;

namespace paper_scissors_rock_battle.GraphQL.Matches
{
    [ExtendObjectType(name: "Query")]
    public class MatchQueries
    {
        [UseDbContext(typeof(AppDbContext))]
        [UseProjection]
        [UseFiltering]
        [UseSorting]
        public IQueryable<Match> GetMatches([ScopedService] AppDbContext context)
        {
            return context.Matches;
        }

    }
}

//    {
//        public Match GetMatches() =>
//           new Match
//            {
//                Result = "WIN",
//                Name = "Paul"
//            }; 
