import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { black, white } from '../utils/colors'

export default function SubmitButton ({ children, onPress, style = {} }) {
	return (
		<TouchableOpacity onPress={onPress} style={[styles.submitBtn, style]}>
			<Text style={styles.submitBtnText}>{children}</Text>
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
		borderRadius: 2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	submitBtnText: {
		color: white,
		fontSize: 22,
		textAlign: 'center',
	}
})