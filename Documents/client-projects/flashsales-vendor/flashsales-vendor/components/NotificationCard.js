import React from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import globals from "../globals"

function NotificationCard({ image, name, title, time }) {
	return (
		<View style={styles.cardContainer}>
			<View style={styles.imageContainer}>{image}</View>
			<View style={styles.cardtextGroup}>
				<Text style={styles.cardName}>{name}</Text>
				<Text style={styles.cardTitle}>{title}</Text>
				<Text style={styles.cardTime}>{time}</Text>
			</View>
		</View>
	)
}

export default NotificationCard

const styles = StyleSheet.create({
	cardContainer: {
		backgroundColor: "#F1F1F1",
		padding: 16,
		borderRadius: 8,
		// height: 104,
		minHeight: 104,
		gap: 16,
		flexDirection: "row",
		alignItems: "flex-start",
	},
	imageContainer: {
		width: 36,
		height: 36,
		borderRadius: 100,
	},
	cardtextGroup: {
		gap: 8,
	},
	cardName: {
		fontSize: 12,
		fontWeight: 500,
		color: globals.captionText,
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: 500,
		color: globals.blackText,
	},
	cardTime: {
		fontSize: 16,
		fontWeight: 500,
		color: "#3449ED",
	},
})
