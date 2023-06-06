import React from "react"
import { StyleSheet, Text, View } from "react-native"
import globals from "../globals"

function WithdrawalCard() {
	return (
		<View style={styles.cardContainer}>
			<Text style={styles.cardDate}>September 5, 2020</Text>
			<Text style={styles.cardTitle}>Card withdrawal</Text>
			<Text style={styles.cardAmount}>$218.50</Text>
		</View>
	)
}

export default WithdrawalCard

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: "#F1F1F1",
		padding: 16,
		borderRadius: 8,
		height: 104,
		gap: 8,
	},
	cardDate: {
		fontSize: 12,
		fontWeight: 500,
		color: globals.captionText,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: 500,
		color: globals.blackText,
	},
	cardAmount: {
		fontSize: 16,
		fontWeight: 500,
		color: "#DB271A",
	},
})
