import { AsyncStorage } from 'react-native'

export const FLASH_CARDS_KEY = 'MobileFlashCards:cards'

export function getDecks () {
	return AsyncStorage.getItem(FLASH_CARDS_KEY)
		.then(formatResults)
}

export function getDeck (id) {
  return AsyncStorage.getItem(FLASH_CARDS_KEY).
    then((results) => {
      const data = JSON.parse(results)
      return data[id]
    })
}

export function saveDeckTitle (title) {
  return AsyncStorage.mergeItem(FLASH_CARDS_KEY, JSON.stringify({
    [title]: { title , questions: [] }
  }))
}

export function addCardToDeck ({ card, title }) {
	// async add card
}

function formatResults (results = {}) {
	return dummyData
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