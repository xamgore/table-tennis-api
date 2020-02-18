import { Player } from '../graphql-types'
import { random } from 'lodash'
import faker from 'faker'


let id = 0

const p = (name: string, position: string, month: number, day: number): Player => {
  const birthDate = new Date(1995, month - 1, day)
  const [, firstName, lastName] = name.match(/(\p{L}+)\s*(.*?)$/ui) || []
  const sex = ['Евгения', 'Полина', 'Анастасия'].includes(firstName) ? 'women' : 'men'

  return {
    id: id++,
    position,
    firstName,
    lastName,
    birthDate,
    age: 2020 - birthDate.getFullYear(),
    heightInCm: faker.random.number({ min: 100, max: 200, precision: 1 }),
    weightInKg: faker.random.number({ min: 38, max: 100, precision: 1 }),
    image: {
      'large': `https://randomuser.me/api/portraits/${sex}/${id}.jpg`,
      'medium': `https://randomuser.me/api/portraits/med/${sex}/${id}.jpg`,
      'thumbnail': `https://randomuser.me/api/portraits/thumb/${sex}/${id}.jpg`
    },
  }
}


export const players: Player[] = [
  p('Евгения Голубенко', 'Chief Editor', 1, 1),
  p('Иван Шараев', 'SEO', 1, 2),
  p('Даниил Монин', 'Chief SEO', 1, 3),
  p('Серёгин Дмитрий', 'Marketer', 1, 5),
  p('Николай Адеев', 'Wordpress Developer', 1, 17),
  p('Антон Павлов', 'SEO', 3, 17),
  p('Антон Фабрициус', 'Node.js Developer', 3, 21),
  p('Александр Заболотный', 'Administrator', 3, 22),
  p('Константин Цехмейстер', 'Frontend Developer', 4, 1),
  p('Роман Гаев', 'Marketer', 4, 19),
  p('Роман Володин', 'Frontend Developer', 4, 25),
  p('Эдуард Исправников', 'Administrator', 5, 25),
  p('Полина 🍄', 'Marketer', 6, 11),
  p('Олег Наговский', 'Backend Developer', 6, 13),
  p('Антон Павлов', 'Frontend Lead', 6, 20),
  p('Саша Демчук', 'Product Owner', 7, 9),
  p('Михаил Яровой', 'Mobile Developer', 7, 13),
  p('Ферас Даиев 💣', 'Backend Developer', 7, 21),
  p('Евгений Паньков', 'Wordpress Developer', 7, 31),
  p('Анастасия Грачевски', 'HR', 9, 11),
  p('Андрей Гусаров', 'Tech Lead', 10, 6),
  p('Алексей Жуваров', 'Marketer', 10, 26),
  p('Сергей Сáвлов', 'Product Owner', 10, 28),
  p('Шамиль Камаев', 'Frontend Developer', 10, 11),
  p('Игорь Стребежев', 'Node.js Lead', 11, 30),
  p('Вова Точилин', 'CEO', 12, 7),
  p('Паша Гришин', 'Administrator', 12, 30),
]


export const randomPlayer = () => players[random(players.length - 1)]
