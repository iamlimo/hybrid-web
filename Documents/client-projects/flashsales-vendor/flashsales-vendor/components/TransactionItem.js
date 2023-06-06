import React from "react"
import { StyleSheet, Text, View } from "react-native"
import globals from "../globals"
import IncomeIco from "../icons/credit-Ico.svg"
import ExpIco from "../icons/exp-Ico.svg"
import Hr from "../icons/hr.svg"

function TransactionItem({ type, TypeText, caption, date, amount, time }) {
	return (
		<>
			<View style={styles.cardContainer}>
				<View style={styles.IcoContainer}>
					{type === "Income" ? <IncomeIco /> : <ExpIco />}
				</View>
				<View style={styles.cardTextGroup}>
					<Text style={styles.TransactionType}>{TypeText}</Text>
					<Text style={styles.TransactionCaption}>{caption}</Text>
					<Text style={styles.TransactionCaption}>{date}</Text>
				</View>
				<View style={styles.amountGroup}>
					<Text style={styles.amountText}>{amount}</Text>
					<Text style={styles.TransactionCaption}>{time}</Text>
				</View>
			</View>
			<View style={{ alignSelf: "center" }}>
				<Hr />
			</View>
		</>
	)
}

export default TransactionItem

const styles = StyleSheet.create({
	cardContainer: {
		borderRadius: 8,
		minHeight: 60,
		gap: 16,
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 24,
	},
	IcoContainer: {
		backgroundColor: "#FFF",
		height: 40,
		width: 40,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	cardTextGroup: {
		width: "57%",
		gap: 6,
	},
	TransactionType: {
		fontSize: 16,
		fontWeight: 600,
		color: globals.blackText,
	},
	TransactionCaption: {
		fontSize: 12,
		fontWeight: 500,
		color: globals.captionText,
	},
	amountGroup: {
		gap: 6,
	},
	amountText: {
		fontSize: 18,
		fontWeight: 600,
		color: globals.blackText,
	},
})
