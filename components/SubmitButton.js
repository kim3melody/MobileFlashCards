import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { black, white } from '../utils/colors'

export default function SubmitButton ({ children, onPress, buttonStyle = {}, textStyle = {} }) {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.submitBtn, buttonStyle]}>
			<Text style={[styles.submitBtnText, textStyle]}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	submitBtn: {
		marginTop: 15,
		padding: 10,
		paddingLeft: 30,
		paddingRight: 30,
		height: 45,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
	},
	submitBtnText: {
		fontSize: 22,
		textAlign: 'center',
	}
})