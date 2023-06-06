import React from "react"
import { ImageBackground } from "react-native"
import { View } from "react-native"
import globals from "../globals"
import { StyleSheet } from "react-native"
import { Text } from "react-native"

function CardBalance({ title, balance, name }) {
	return (
		<View style={styles.mainCardContainer}>
			<ImageBackground
				style={styles.cardContainer}
				// resizeMode='cover'
				imageStyle={styles.imageStyle}
				source={require("../assets/Cardbalance.png")}>
				<View style={styles.cardGroup}>
					<Text
						style={{
							color: globals.textColor,
							fontWeight: 600,
							fontSize: 16,
						}}>
						Available Balance
					</Text>
					<Text
						style={{
							color: globals.textColor,
							fontWeight: 600,
							fontSize: 32,
							marginTop: 33,
						}}>
						$28,540
					</Text>
					<Text
						style={{
							color: globals.textColor,
							fontWeight: 600,
							fontSize: 14,
							marginTop: 22,
						}}>
						Albert Enejeh
					</Text>
				</View>
			</ImageBackground>
		</View>
	)
}

export default CardBalance

const styles = StyleSheet.create({
	mainCardContainer: {
		height: 179,
		width: "100%",
		// backgroundColor: "red",
	},
	cardContainer: {
		// height: "100%",
		// width: "100%",
		// borderRadius: 20,
		flex: 1,
		resizeMode: "cover",
	},
	imageStyle: {
		borderRadius: 10,
	},
	cardGroup: {
		paddingVertical: 18,
		paddingHorizontal: 13,
	},
})
