import { AsyncStorage } from 'react-native'

export const FLASH_CARDS_KEY = 'MobileFlashCards:cards'

export function getDecks () {
	return AsyncStorage.getItem(FLASH_CARDS_KEY)
		.then(formatResults)
}

export function getDeck (id) {
  return AsyncStorage.getItem(FLASH_CARDS_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      return data[id]
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(FLASH_CARDS_KEY, JSON.stringify({
    [title]: { title: title , questions: [] }
  }))
}

export function addCardToDeck ({ card, title }) {
	return AsyncStorage.getItem(FLASH_CARDS_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      AsyncStorage.mergeItem(FLASH_CARDS_KEY, JSON.stringify({
        [title]: {
          questions: data[title].questions.concat([card])
        }
      }))
    })
}

function formatResults (results = {}) {
	return results === null
    ? AsyncStorage.setItem(FLASH_CARDS_KEY, JSON.stringify(dummyData))
    : JSON.parse(results)
}

const dummyData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}