import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../actions'
import { 
	KeyboardAvoidingView, 
	TouchableOpacity, 
	Text,
	TextInput, 
	StyleSheet 
} from 'react-native'
import { gray, black } from '../utils/colors'
import SubmitButton from './SubmitButton'
import { saveDeckTitle } from '../utils/api'

class NewDeck extends Component {
	state = {
		deckTitle: ''
	}

  handleSubmit = () => {
    const { deckTitle } = this.state

    this.props.dispatch(addDeck(deckTitle))
    this.setState({deckTitle: ''})
    saveDeckTitle(deckTitle)
    this.setState(() => ({deckTitle: ''}))
  }

	render() {
		const { deckTitle } = this.state

		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.infoText}>
        	What is the title of your new deck?
        </Text>
        <TextInput
        	value={deckTitle}
        	style={styles.input}
        	onChangeText={(deckTitle) => this.setState({deckTitle})}
          />
        <SubmitButton 
          children={'SUBMIT'} 
          style={{backgroundColor: black}}
          onPress={this.handleSubmit}
          />
      </KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoText: {
  	fontSize: 30,
  	padding: 15,
  	textAlign: 'center'
  },
  input: {
  	borderColor: gray,
  	borderWidth: 2,
  	borderRadius: 10,
  	width: '60%',
  	height: 50,
  }
});

function mapStateToProps (state) {
  return state
}

export default connect(mapStateToProps)(NewDeck)