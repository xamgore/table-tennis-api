import { Match, MatchPlace, MatchStatus } from '../graphql-types'
import { randomPlayer } from './players'
import { random, range } from 'lodash'
import faker from 'faker'


let id = 0

export const createMatch = (): Match => {
  const m: Match = {
    id: id++,
    place: Object.values(MatchPlace)[random(0, 2)],
    date: faker.date.recent(5),
    status: Math.random() < 0.8
      ? MatchStatus.StatusFinished
      : Math.random() < 0.8
        ? MatchStatus.StatusNotStarted
        : MatchStatus.StatusCancelled,
    player1: randomPlayer(),
    player2: randomPlayer(),
    games: [
      { player1: 11, player2: 7 },
      { player1: 5, player2: 11 },
      { player1: 7, player2: 11 },
    ],
    result: null,
  }

  if (m.status === MatchStatus.StatusFinished) {
    m.result = {
      player1: m.games.reduce((sum, res) => res.player1 > res.player2 ? 1 : 0, 0),
      player2: m.games.reduce((sum, res) => res.player1 < res.player2 ? 1 : 0, 0),
    }
  } else {
    m.games = []
  }

  return m
}


export const matches = new Map<number, Match>(
  range(0, 12)
    .map(createMatch)
    .map(m => [m.id, m]),
)
