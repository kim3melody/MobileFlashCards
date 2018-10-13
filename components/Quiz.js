import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  View, 
  TouchableOpacity, 
  Text,
  TextInput, 
  StyleSheet ,
} from 'react-native'
import { gray, black, white, green, red } from '../utils/colors'
import TextButton from './TextButton'
import SubmitButton from './SubmitButton'
import { NavigationActions } from 'react-navigation'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: 'Quiz' }
  }

  state = {
    index: 0,
	side: 'front',
    correct: 0
  }

  handleCorrect = () => {
    this.setState((state) => ({
      ...state,
      index: state.index + 1,
      correct: state.correct + 1,
      side: 'front'
    }))
  }

  handleWrong = () => {
    this.setState((state) => ({
      ...state,
      index: state.index + 1,
      side: 'front'
    }))
  }

  flipCard = () => {
    this.setState((state) => {
      return state.side === 'front'
        ? {...state, side: 'back'}
        : {...state, side: 'front'}
    })
  }

  startOver = () => {
    this.setState({
      index: 0,
      side: 'front',
      correct: 0
    })
  }

  goBack = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  summaryView = () => {
    const { container, progress, body, question } = styles
    return (
      <View style={container}>
        <Text style={progress}>
          {`Quiz completed`}
        </Text>
        <View style={body}>
          <Text style={question}>
            {`Score: ${this.state.correct} / ${this.props.questions.length}`}
          </Text>
          <SubmitButton 
            children='Start Over'
            buttonStyle={{backgroundColor: black, width: 200}}
            textStyle={{color: white}}
            onPress={this.startOver}
          />
          <SubmitButton 
            children='Go Back'
            buttonStyle={{backgroundColor: black, width: 200}}
            textStyle={{color: white}}
            onPress={this.goBack}
          />
        </View>
      </View>
    )
  }

  render() {
	const { index, side } = this.state
    const { questions } = this.props
    const { container, progress, body, question } = styles

    if (index === questions.length) {
      clearLocalNotification()
        .then(setLocalNotification)
      return (this.summaryView())
    }

	return (
      <View style={container}>
        <Text style={progress}>
         {`${index+1} / ${questions.length}`}
        </Text>
        <View style={body}>
          <Text style={question}>
            {side === 'front' 
              ? questions[index].question 
              : questions[index].answer}
          </Text>
          <TextButton 
            children={this.state.side === 'front' ? 'Show answer' : 'Show question'}
            onPress={this.flipCard}
          />
          <SubmitButton 
            children='Correct'
            buttonStyle={{backgroundColor: green, width: 200}}
            textStyle={{color: white}}
            onPress={this.handleCorrect}
          />
          <SubmitButton 
            children='Incorrect'
            buttonStyle={{backgroundColor: red, width: 200}}
            textStyle={{color: white}}
            onPress={this.handleWrong}
          />
        </View>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  body: {
    flex: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100
  },
  progress: {
    flex: 1,
  	fontSize: 20,
  	padding: 10,
  },
  question: {
    fontSize: 30,
    padding: 20,
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
  const key = navigation.state.params.item.key
  return {
    key,
    questions: state[key].questions
  }
}

export default connect(mapStateToProps)(Quiz)