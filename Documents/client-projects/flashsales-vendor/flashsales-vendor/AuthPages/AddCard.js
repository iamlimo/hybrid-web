import React from "react"
import Layout from "../../components/Layout"
import { TouchableOpacity, View } from "react-native"
import { Text } from "react-native"
// import { Image } from "expo-image"
import { Image } from "react-native"
import Input from "../../components/Input"
import styles from "./Auth.style"

function AddCard({ navigation }) {
	return (
		<Layout>
			<View
				style={{
					marginTop: 44,
					flexDirection: "row",
					alignItems: "center",
					gap: 14,
				}}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image source={require("../../assets/backIco.png")} />
				</TouchableOpacity>
				<Text style={{ color: "#0468BF", fontWeight: 600, fontSize: 20 }}>
					Add Card
				</Text>
			</View>
			<Image
				style={{ marginTop: 40, marginBottom: 30 }}
				source={require("../../assets/cardImage.png")}
			/>
			<View style={{ gap: 16, marginBottom: 80 }}>
				<Input placeholder={"Name of card"} />
				<Input placeholder={"Card number"} />
				<Input placeholder={"Expiry date"} />
				<Input type={"date"} placeholder={"CVV/CVC"} />
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("SetLocation")}
				style={styles.button}>
				<Text style={styles.buttonText}>Create Card</Text>
			</TouchableOpacity>
		</Layout>
	)
}

export default AddCard
