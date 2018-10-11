import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { StyleSheet, Text, View } from 'react-native'
import NewDeck from './components/NewDeck'
import DeckList from './components/DeckList'

export default class App extends React.Component {
  render() {
    return (
    	<Provider store={createStore(reducer)}>
    		<View style={{flex: 1}}>
    			<DeckList />
    		</View>
    	</Provider>
    );
  }
}

