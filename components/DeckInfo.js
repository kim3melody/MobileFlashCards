import React, { Component } from 'react'
import {
	View, 
	Text,
	StyleSheet 
} from 'react-native'
import { white, gray } from '../utils/colors'

export default class DeckInfo extends Component {
	render() {
		const { item } = this.props
		return (
			<View style={styles.item}>
				<Text style={styles.titleText}>{item.key}</Text>
				<Text style={styles.infoText}>{`${item.numberOfCards} cards`}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: white,
    padding: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 20,
  },
  infoText: {
  	color: gray,
    fontSize: 20,
  },
})
