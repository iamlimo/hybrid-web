import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import globals from "../../globals"
import Input from "../../components/Input"
import { TouchableOpacity } from "react-native"
import styles from "./Auth.style"
import Button from "../../components/Button"
import Layout from "../../components/Layout"
import { UserContext } from "../../context/AuthContext"
import { useContext } from "react"

export default function SignIn({ navigation }) {
	const { state, dispatch } = useContext(UserContext)
	return (
		<Layout>
			<StatusBar
				style='inverted'
				animated={true}
				backgroundColor={globals.mainColor}
			/>

			<Text style={styles.titleText}>Sign in</Text>
			<View style={styles.inputContainer}>
				<Input
					keyboardType={"email-address"}
					placeholder={"Email or username"}
				/>

				<Input secureTextEntry={true} placeholder={"Password"} />
				<TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
					<Text
						style={{
							color: "#626262",
							fontWeight: 500,
							fontSize: 14,
							alignSelf: "center",
						}}>
						Forgot password?
					</Text>
				</TouchableOpacity>
			</View>
			<Button
				title={"Login"}
				onPress={() => {
					dispatch({ type: "SET_TOKEN", payload: "token" }),
						navigation.navigate("CreatePin")
				}}
			/>
		</Layout>
	)
}
