import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation'
import { purple, white } from '../utils/colors'
import NewDeck from '../components/NewDeck'
import DeckList from '../components/DeckList'
import IndividualDeck from '../components/IndividualDeck'
import NewQuestion from '../components/NewQuestion'
import Quiz from '../components/Quiz'

export const Tabs = createMaterialTopTabNavigator({
  DeckList: {
	screen: DeckList,
	navigationOptions: {
	  tabBarLabel: 'Decks',
	}
  },
  NewDeck: {
	screen: NewDeck,
	navigationOptions: {
	  tabBarLabel: 'New Deck',
    }
  }
}, {
  navigationOptions: {
	header: null
  },
  tabBarOptions: {
    activeTintColor: white,
    style: {
      height: 56,
      backgroundColor: purple,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs,
	  navigationOptions: { header: null }
	},
	IndividualDeck: {
	  screen: IndividualDeck,
	  navigationOptions: {
	    headerTintColor: white,
	    headerStyle: {
	      backgroundColor: purple,
	    }
	  }
	},
	NewQuestion: {
	  screen: NewQuestion,
      navigationOptions: {
	    headerTintColor: white,
	    headerStyle: {
	      backgroundColor: purple,
	    }
	  }
	},
	Quiz: {
	  screen: Quiz,
	  navigationOptions: {
	    headerTintColor: white,
	    headerStyle: {
		  backgroundColor: purple,
	    }
	  }
	}
})