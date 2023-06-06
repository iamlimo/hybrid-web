import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

function Header({ navigation, title }) {
	// console.log({ navigation })
	return (
		<SafeAreaView style={styles.container}>
			<View
				style={{
					marginTop: 25,
					flexDirection: "row",
					alignItems: "center",
					gap: 14,
					// backgroundColor: "green",
				}}>
				<TouchableOpacity
					style={{
						// backgroundColor: "red",
						paddingRight: 15,
						// paddingVertical: 15,
					}}
					onPress={() => navigation.goBack()}>
					<Ionicons name='chevron-back-outline' size={24} color='#171520' />
				</TouchableOpacity>
				<Text style={{ color: "#0468BF", fontWeight: 600, fontSize: 20 }}>
					{title}
				</Text>
			</View>
		</SafeAreaView>
	)
}

export default Header

const styles = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 20,
		// paddingVertical: 10,
	},
})
