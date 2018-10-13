import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import DeckInfo from './DeckInfo'
import SubmitButton from './SubmitButton'
import { white, black } from '../utils/colors'

class IndividualDeck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { item } = navigation.state.params
    return { title: item.key }
  }

  render() {
  	const { item } = this.props
    return (
      <View style={styles.container}>
        <DeckInfo item={item} />
        <SubmitButton 
          children='Add Card' 
          buttonStyle={{
            backgroundColor: white,
            borderWidth: 2,
            borderColor: black,
          }}
          textStyle={{color: black}}
          onPress={() => this.props.navigation.navigate(
            'NewQuestion',
            { item }
          )}
        />
        <SubmitButton 
          children='Start Quiz'
          buttonStyle={{backgroundColor: black}}
          textStyle={{color: white}}
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            { item }
          )}
        />
      </View>      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function mapStateToProps (state, { navigation }) {
  const key = navigation.state.params.item.key
  const numberOfCards = state[key].questions.length
   return {
    item: {
      key,
      numberOfCards
    }
  }
}

export default connect(
  mapStateToProps,
)(IndividualDeck) 