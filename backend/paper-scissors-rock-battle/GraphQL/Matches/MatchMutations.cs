using System;
using System.Threading;
using System.Threading.Tasks;
using HotChocolate;
using HotChocolate.Types;
using paper_scissors_rock_battle.Data;
using paper_scissors_rock_battle.Model;
using System.Collections.Generic;
using System.Linq;
using HotChocolate.Data;

namespace paper_scissors_rock_battle.GraphQL.Matches
{
    [ExtendObjectType(name: "Mutation")]
    public class MatchMutations
    {
        [UseDbContext(typeof(AppDbContext))]
        public async Task<Match> AddMatchAsync(AddMatchInput input,
        [ScopedService] AppDbContext context, CancellationToken cancellationToken)
        {
            var match = new Match
            {
                Result = input.Result,
                OpponentName = input.OpponentName,
                OpponentImageURL = input.OpponentImageURL,
            };

            context.Matches.Add(match);
            await context.SaveChangesAsync(cancellationToken);

            return match;
        }

    }
}
