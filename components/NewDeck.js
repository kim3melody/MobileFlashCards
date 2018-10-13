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
import { gray, black, white } from '../utils/colors'
import SubmitButton from './SubmitButton'
import { saveDeckTitle } from '../utils/api'
import { NavigationActions } from 'react-navigation'

class NewDeck extends Component {
	state = {
		title: ''
	}

  handleSubmit = () => {
    const { title } = this.state
    this.props.dispatch(addDeck(title))
    saveDeckTitle(title)
    this.setState(() => ({title: ''}))
    this.props.navigation.navigate(
        'IndividualDeck',
        { item: { key: title } }
      )
  }

	render() {
		const { title } = this.state

		return (
			<KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text style={styles.infoText}>
        	What is the title of your new deck?
        </Text>
        <TextInput
        	value={title}
        	style={styles.input}
        	onChangeText={(title) => this.setState({title})}
        />
        <SubmitButton 
          children={'Create Deck'} 
          buttonStyle={{backgroundColor: black}}
          textStyle={{color: white}}
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