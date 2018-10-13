import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import { 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  Text,
  TextInput, 
  StyleSheet ,
  Alert,
} from 'react-native'
import { gray, black, white } from '../utils/colors'
import SubmitButton from './SubmitButton'
import { addCardToDeck } from '../utils/api'
import { NavigationActions } from 'react-navigation'

class NewQuestion extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: 'Add Card' }
  }

  state = {
	question: '',
    answer: '',
  }

  handleSubmit = () => {
    const title = this.props.item.key
    const card = this.state

    if (card.question === '' || card.answer === '') {
      Alert.alert(
        'Invalid inputs',
        'Question or answer cannot be empty',
        [{text: 'OK', onPress: () => {}}],
        { cancelable: false}
      )
      return
    }
    this.props.dispatch(addQuestion({ title, card }))
    addCardToDeck({ card, title })
    this.setState(() => ({question: '', answer: ''}))
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
	const { question, answer } = this.state

	return (
	  <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <TextInput
          value={question}
          placeholder={'Enter the question here'}
          style={styles.input}
          onChangeText={(q) => this.setState({question: q})}
        />
        <TextInput
          value={answer}
          placeholder={'Enter the answer here'}
          style={styles.input}
          onChangeText={(a) => this.setState({answer: a})}
        />
        <SubmitButton 
          children='Submit'
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
    padding: 15,
    margin: 10,
  	width: '80%',
  	height: 50,
  }
});

function mapStateToProps (state, { navigation }) {
  const { item } = navigation.state.params
  return {
    item
  }
}

export default connect(mapStateToProps)(NewQuestion)