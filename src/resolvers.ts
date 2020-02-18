import { Match, MatchStatus, MutationCreateMatchArgs, QueryLeaguesArgs, Resolvers } from './graphql-types'
import { DateTimeResolver } from 'graphql-scalars'
import { leagues } from './data/leagues'
import { players } from './data/players'
import { createMatch } from './data/matches'
import { PubSub } from 'apollo-server'


const pubsub = new PubSub()
const MATCH_AFFECETED = 'MATCH_AFFECTED'


export const resolvers: Resolvers = {

  DateTime: DateTimeResolver,


  Query: {
    players: () => players,
    leagues: (_, args: QueryLeaguesArgs) =>
      leagues.filter(l => args.ids?.length ? args.ids.includes(l.id) : true),
  },


  Mutation: {
    createMatch: (_, { leagueId, place, player1Id, player2Id }: MutationCreateMatchArgs): Match => {
      const l = leagues.find(l => l.id === leagueId)
      if (!l) throw new Error('League with such title was not found')

      const match = {
        ...createMatch(),
        status: MatchStatus.StatusPlaying,
        player1: players.find(p => p.id === player1Id),
        player2: players.find(p => p.id === player2Id),
        place,
      }

      l.matches.push(match)
      pubsub.publish(MATCH_AFFECETED, { matchAffected: match })
      return match
    },


    finishGame: (_, { matchId, games }): Match => {
      const match = leagues.flatMap(l => l.matches).find(m => m.id === matchId)
      if (!match) throw new Error('Match with such id was not found')

      match.status = MatchStatus.StatusFinished
      match.games = games

      match.result = {
        player1: match.games.reduce((sum, res) => res.player1 > res.player2 ? 1 : 0, 0),
        player2: match.games.reduce((sum, res) => res.player1 < res.player2 ? 1 : 0, 0),
      }

      pubsub.publish(MATCH_AFFECETED, { matchAffected: match })
      return match
    },
  },


  Subscription: {
    matchAffected: {
      subscribe: () => pubsub.asyncIterator([MATCH_AFFECETED]),
    },
  },

}
