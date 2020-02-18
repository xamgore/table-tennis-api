import { matches } from './matches'
import { Match } from '../graphql-types'


export const data = [
  { id: 0, title: 'Высшая Ленинградская Лига', imageUrl: 'https://picsum.photos/200/200' },
  { id: 1, title: 'Лига Чемпионов', imageUrl: 'https://picsum.photos/200/200' },
  { id: 2, title: 'Лига Юниоров', imageUrl: 'https://picsum.photos/200/200' },
  { id: 3, title: 'Лига "Фронтенд vs Бекенд"', imageUrl: 'https://picsum.photos/200/200' },
]

const map = new Map<number, Match[]>([[0, []], [1, []], [2, []], [3, []]])

for (const match of matches.values()) {
  map.get(match.id % 4)?.push(match)
}

export const leagues = [...map.entries()].map(([idx, matches]) => ({ ...data[idx], matches }))
