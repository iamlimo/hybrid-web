import React from "react"
import { Text } from "react-native"
import Layout from "../../components/Layout"
import styles from "./Auth.style"
import Input from "../../components/Input"
import { TouchableOpacity } from "react-native"
import { View } from "react-native"

function CreatePin({ navigation }) {
	return (
		<Layout>
			<Text style={styles.titleText}>Create 4 digit Pin</Text>
			<Text
				style={{
					color: "#626262",
					marginBottom: 24,
					fontWeight: 500,
					fontSize: 14,
				}}>
				Please enter a 4 digit pin of your choice.
			</Text>
			<View style={{ marginBottom: 80 }}>
				<Input placeholder={"Enter your 4-digit PIN"} />
			</View>

			<TouchableOpacity
				onPress={() => navigation.navigate("AddCard")}
				style={styles.button}>
				<Text style={styles.buttonText}>Continue</Text>
			</TouchableOpacity>
		</Layout>
	)
}

export default CreatePin
