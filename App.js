import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { View, StatusBar } from 'react-native'
import { purple } from './utils/colors'
import { Constants } from 'expo'
import { setLocalNotification } from './utils/helpers'
import { MainNavigator } from './utils/router'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
	componentDidMount() {
		setLocalNotification()
	}
  render() {
    return (
    	<Provider store={createStore(reducer)}>
    		<View style={{flex: 1}}>
    			<UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
    			<MainNavigator />
    		</View>
    	</Provider>
    );
  }
}

