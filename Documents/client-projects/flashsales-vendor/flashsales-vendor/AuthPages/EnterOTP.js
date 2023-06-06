import React from "react"
import { Text } from "react-native"
import Layout from "../../components/Layout"
import styles from "./Auth.style"
import Input from "../../components/Input"
import { TouchableOpacity } from "react-native"
import globals from "../../globals"

function CreatePin({ navigation }) {
	return (
		<Layout>
			<Text style={styles.titleText}>Enter OTP</Text>
			<Text
				style={{
					color: "#626262",
					marginBottom: 24,
					fontWeight: 500,
					fontSize: 14,
				}}>
				A 4 digit code was sent to your number.
			</Text>
			<Input placeholder={"Enter your 4-digit PIN"} />
			<Text
				style={{
					color: "#626262",
					marginBottom: 24,
					fontWeight: 500,
					fontSize: 14,
				}}>
				Didn’t recieve the code?
				<TouchableOpacity onPress={() => navigation.navigate("CreatePin")}>
					<Text style={{ color: globals.titleTextColor }}>Request again</Text>
				</TouchableOpacity>
			</Text>
			<TouchableOpacity
				onPress={() => navigation.navigate("CreatePin")}
				style={styles.button}>
				<Text style={styles.buttonText}>Verify and proceed</Text>
			</TouchableOpacity>
		</Layout>
	)
}

export default CreatePin
