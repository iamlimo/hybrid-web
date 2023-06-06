import React from "react"
import { Text } from "react-native"
import { Image } from "react-native"
import { View } from "react-native"
import { StyleSheet } from "react-native"
import globals from "../globals"

function StatCard({ image, textOne, textTwo, price }) {
	return (
		<View style={styles.statCardGroup}>
			<View style={styles.statCard}>
				{/*  */}
				{image}
				<Text style={styles.statCardText}>{price}</Text>
			</View>
			<View style={{ alignItems: "center" }}>
				<Text
					style={{
						color: "#444444",
						textAlign: "center",
						fontWeight: 500,
						fontSize: 16,
						marginTop: 10,
					}}>
					{textOne}
				</Text>
				<Text
					style={{
						color: "#444444",
						textAlign: "center",
						fontWeight: 500,
						fontSize: 16,
					}}>
					{textTwo}
				</Text>
			</View>
		</View>
	)
}

export default StatCard

const styles = StyleSheet.create({
	statCardGroup: {
		// width: "20%",
		// backgroundColor: "red",
		alignItems: "center",
	},
	statCard: {
		backgroundColor: "#CAEFFB",
		paddingVertical: 10,
		paddingHorizontal: 20,
		width: 100,
		height: 88,
		borderRadius: 6,
		alignItems: "center",
	},
	statCardText: {
		color: globals.mainColor,
		fontSize: 12,
		fontWeight: 500,
	},
})
