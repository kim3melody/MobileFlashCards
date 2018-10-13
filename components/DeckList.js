import React, { Component } from 'react'
import { connect } from 'react-redux'
import { receiveDecks } from '../actions'
import { View, Text, StyleSheet, Platform, TouchableOpacity, FlatList} from 'react-native'
import { getDecks } from '../utils/api'
import { white, gray } from '../utils/colors'
import DeckInfo from './DeckInfo'

class DeckList extends Component {
	
	componentDidMount () {
		const { dispatch } = this.props
		getDecks()
			.then((Decks) => dispatch(receiveDecks(Decks)))
	}

	renderItem = ({ item }) => (
		<TouchableOpacity 
			style={styles.card}
			onPress={() => this.props.navigation.navigate(
				'IndividualDeck',
				{ item: { key: item.key } }
			)}
		>
			<DeckInfo item={item}/>
		</TouchableOpacity>
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

const styles = StyleSheet.create({
  card: {
    borderBottomWidth: 1,
    borderBottomColor: gray,
  },
})

function mapStateToProps (state) {
	const deckArray =Object.keys(state).map((key) => ({
			key, 
			numberOfCards: state[key].questions.length}
	))
	return { deckArray }
}

export default connect(mapStateToProps)(DeckList)