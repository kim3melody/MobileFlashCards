import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions'

function decks (state= {}, action) {
	switch (action.type) {
		case RECEIVE_DECKS :
			return {
				...state,
				...action.decks,
			}
		case ADD_DECK : {
			const { title } = action
			return {
				...state,
				[title]: {
					title: title,
					questions: []
				}
			}
		}			
		case ADD_QUESTION : {
			const { title, card } = action
			return {
				...state,
				[title]: {
					...state[title],
					questions: state[title].questions.concat([card])
				}
			}
		}
		default :
			return state
	}
}

export default decks