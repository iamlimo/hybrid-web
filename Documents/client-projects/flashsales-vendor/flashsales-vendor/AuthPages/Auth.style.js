import { StyleSheet } from "react-native"
import globals from "../globals"

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 20,
	},
	titleText: {
		color: globals.titleTextColor,
		fontSize: 40,
		fontWeight: 700,
		marginTop: 60,
		marginBottom: 19,
	},
	inputContainer: {
		gap: 24,
		marginBottom: 80,
	},
	Number: {
		width: "100%",
		flexDirection: "row",
		gap: 10,
	},
	image: {
		flex: 1,
		width: 100,
		height: 100,
		backgroundColor: "#000",
	},
	button: {
		backgroundColor: globals.mainColor,
		paddingHorizontal: 14,
		paddingVertical: 14,
		height: 49,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 6,
		marginBottom: 20,
	},
	buttonText: {
		color: "#CAEFFB",
		fontSize: 14,
		fontWeight: 400,
	},
	VehicleUploadGroup: {
		borderColor: "#BDBDBD",
		borderWidth: 0.87,
		borderRadius: 10.41,
		height: 282.06,
		marginBottom: 20,
		paddingHorizontal: 14,
		paddingVertical: 12,
	},
	VehicleUploadPreview: {
		borderStyle: "dashed",
		borderRadius: 10.41,
		borderWidth: 0.87,
		borderColor: "#605979",
		height: 151.88,
		marginTop: 13,
	},
	VehicleUploadGroup2: {
		borderColor: "#BDBDBD",
		// borderWidth: 0.87,
		// borderRadius: 10.41,
		height: 182.06,
		marginBottom: 20,
		paddingHorizontal: 14,
		paddingVertical: 12,
	
	},
	VehicleUploadPreview2: {
		// borderStyle: "dashed",
		borderRadius: 10.41,
		borderWidth: 0.87,
		borderColor: "#605979",
		height: 151.88,
		backgroundColor: "#0468BF",
		marginTop: 13,
		
	},
})

export default styles
