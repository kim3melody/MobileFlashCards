import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { red } from '../utils/colors'

export default function TextButton ({ children, onPress, textStyle = {} }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={[styles.text, textStyle]}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	text: {
		color: red,
		fontSize: 22,
		textAlign: 'center',
		paddingTop: 20,
		paddingBottom: 50
	}
})