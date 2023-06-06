import React, { useState } from "react"
import { View } from "react-native"
import Layout from "../components/Layout"
import { Text } from "react-native"
import { Image } from "react-native"
import { TouchableOpacity } from "react-native"
import Input from "../components/Input"
import styles from "./Auth.style"
import { Alert } from "react-native"
import * as Location from "expo-location"

function SetLocations({ navigation }) {
	const [location, setLocation] = useState(null)
	const [errorMsg, setErrorMsg] = useState(null)

	async function getLocation() {
		let { status } = await Location.requestForegroundPermissionsAsync()
		if (status !== "granted") {
			setErrorMsg("Permission to access location was denied")
			return
		}

		let location = await Location.getCurrentPositionAsync({})
		setLocation(location)
		Alert.alert("Flash Share", "Location Gotten succesfully")
		console.log(location)
	}
	return (
		<Layout>
			<View style={{  marginHorizontal:20}}>
			<Image
				style={{
					marginTop: 70,
					marginBottom: 30,
					alignSelf: "center",
				}}
				source={require("../assets/LocationImg.png")}
			/>
			<Text
				style={{
					alignSelf: "center",
					color: "#171520",
					fontWeight: 700,
					fontSize: 24,
					marginBottom: 30,
				}}>
				Location
			</Text>
			<View style={{ marginBottom: 24 }}>
				<Input type={"date"} placeholder={"Enter location"} />
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("profileinformation")}
				style={styles.button}>
				<Text style={styles.buttonText}>Continue</Text>
			</TouchableOpacity>

			<Image
				style={{
					marginVertical: 32,
					alignSelf: "center",
				}}
				source={require("../assets/seperator.png")}
			/>
			<TouchableOpacity
				onPress={() => {
					getLocation()
					console.log("clicked")
					if (location) console.log(location)
					if (errorMsg) console.log(errorMsg)
				}}
				style={{
					borderWidth: 1,
					paddingHorizontal: 14,
					paddingVertical: 14,
					height: 49,
					justifyContent: "center",
					alignItems: "center",
					borderRadius: 6,
					borderColor: "#0468BF",
				}}>
				<Text style={{ color: "#0468BF" }}>Turn on location</Text>
			</TouchableOpacity>
			</View>
		</Layout>
	)
}

export default SetLocations
