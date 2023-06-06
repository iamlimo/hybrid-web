import { StyleSheet } from "react-native"
import globals from "../globals"
import { TouchableOpacity } from "react-native"
import { Text } from "react-native"

function Button({ title, ...props }) {
	return (
		<TouchableOpacity {...props} style={styles.button}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	)
}

export default Button

const styles = StyleSheet.create({
	button: {
		backgroundColor: globals.mainColor,
		paddingHorizontal: 14,
		paddingVertical: 14,
		height: 49,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 6,
	},
	buttonText: {
		color: "#CAEFFB",
		fontSize: 14,
		fontWeight: 400,
	},
})
