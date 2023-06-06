import React from "react"
import { Text, View } from "react-native"
import Layout from "../../components/Layout"
import MapView from "react-native-maps"
import { StyleSheet } from "react-native"

function MapPage() {
	return (
		<View style={styles.container}>
			<Text>hello</Text>
			<MapView
				initialRegion={{
					latitude: 6.798483,
					longitude: 3.9064279,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
				style={styles.map}
			/>
		</View>
		// </Layout>
	)
}

export default MapPage

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: "100%",
		height: "100%",
	},
})
