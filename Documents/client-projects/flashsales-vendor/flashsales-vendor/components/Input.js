import { StyleSheet, TextInput } from "react-native"

function Input({ placeholder, keyboardType, ...props }) {
	return (
		<TextInput
			keyboardType={keyboardType}
			placeholderTextColor={"#605979"}
			placeholder={placeholder}
			style={styles.input}
			{...props}
		/>
	)
}

export default Input

const styles = StyleSheet.create({
	input: {
		borderColor: "#F1F1F1",
		borderRadius: 4,
		borderWidth: 1,
		paddingHorizontal: 16,
		paddingVertical: 12,
		backgroundColor: "#F1F1F1",
		width: "100%",
		height: 42,
		// fontWeight: 500,
	},
})
