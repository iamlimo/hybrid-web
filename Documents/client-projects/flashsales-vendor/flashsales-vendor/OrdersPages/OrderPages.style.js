import { StyleSheet } from "react-native"
import globals from "../globals"

const styles = StyleSheet.create({
	pageTitleGroup: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 20,
	},
	textTitle: {
		color: globals.mainColor,
		fontSize: 20,
		fontWeight: 600,
	},
	titleCta: {
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
	imageContainer: {
		height: 36,
		width: 36,
		borderWidth: 0.1,
		borderRadius: 100,
	},
	tabSwitchGroup: {
		backgroundColor: "#F1F1F1",
		height: 36,
		paddingVertical: 4,
		paddingHorizontal: 14,
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 27,
		borderRadius: 12,
		marginBottom: 24,
	},
	activetabSwitch: {
		backgroundColor: "#0468BF",
		width: "45%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	inactivetabSwitch: {
		// backgroundColor: "#0468BF",
		width: "45%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	activetabText: {
		color: "#FFF",
		fontSize: 14,
		fontWeight: 500,
	},
	inactivetabText: {
		color: globals.captionText,
		fontSize: 14,
		fontWeight: 500,
	},
})

export default styles
