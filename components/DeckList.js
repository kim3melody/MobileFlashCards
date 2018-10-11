import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { View, Text, StyleSheet, Platform, TouchableOpacity, FlatList} from 'react-native'
import { getDecks } from '../utils/api'


class DeckList extends Component {
	
	componentDidMount () {
		const { dispatch } = this.props
		getDecks()
			.then((Decks) => dispatch(receiveDecks(Decks)))
	}

	renderItem = ({ item }) => (
		<View>
			<Text>{item.key}</Text>
			<Text>{`${item.numberOfCards} cards`}</Text>
		</View>
	)

	render() {
		const { deckArray } = this.props
		return (
			<FlatList 
				data={deckArray}
				renderItem={this.renderItem}
			/>
		)
	}
}

function mapStateToProps (state) {
	const deckArray =Object.keys(state).map((key) => ({
			key, 
			numberOfCards: state[key].questions.length}
	))
	return { deckArray }
}

export default connect(mapStateToProps)(DeckList)