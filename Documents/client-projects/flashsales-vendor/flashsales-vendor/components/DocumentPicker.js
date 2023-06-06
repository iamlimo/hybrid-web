import React, { useState } from "react"
import { View } from "react-native"
import * as DocumentPicker from "expo-document-picker"
import { TouchableOpacity } from "react-native"
import { Text } from "react-native"
import { StyleSheet } from "react-native"
import globals from "../globals"
import { Alert } from "react-native"

function DocPicker({ title }) {
	const [selectedFile, setSelectedFile] = useState("No file selected")
	async function getFile() {
		const file = await DocumentPicker.getDocumentAsync()
		if (file.type === "success") setSelectedFile(file.name)
		if (file.type === "cancel") console.log("Cancled")
		console.log(file)
	}
	return (
		<View style={{ gap: 10 }}>
			<Text>{title}</Text>
			<View style={styles.container}>
				<Text style={styles.title}>{selectedFile}</Text>
				<TouchableOpacity onPress={() => getFile()}>
					<View style={styles.button}>
						<Text style={{ color: "#CAEFFB" }}>Browse</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default DocPicker

const styles = StyleSheet.create({
	container: {
		borderColor: globals.mainColor,
		borderWidth: 1,
		paddingVertical: 12,
		paddingLeft: 14,
		paddingRight: 6,
		height: 45,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
		borderRadius: 6,
	},
	title: {
		color: globals.mainColor,
		fontSize: 14,
		fontWeight: 400,
	},
	button: {
		backgroundColor: globals.mainColor,
		width: 104,
		height: 37,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 6,
	},
})
