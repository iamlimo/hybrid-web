import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import globals from "../../globals"
import Input from "../../components/Input"
import { TouchableOpacity } from "react-native"
import styles from "./Auth.style"
import Button from "../../components/Button"
import Layout from "../../components/Layout"

export default function ForgotPassword({ navigation }) {
	return (
		<Layout>
			<Text style={styles.titleText}>Forgot password</Text>
			<View style={styles.inputContainer}>
				<Input
					keyboardType={"email-address"}
					placeholder={"Email or username"}
				/>

				<TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
					<Text
						style={{
							color: "#626262",
							fontWeight: 500,
							fontSize: 14,
						}}>
						A 4 digit code will be sent to this email.
					</Text>
				</TouchableOpacity>
			</View>
			<Button
				title={"Proceed"}
				onPress={() => navigation.navigate("CreatePin")}
			/>
		</Layout>
	)
}
