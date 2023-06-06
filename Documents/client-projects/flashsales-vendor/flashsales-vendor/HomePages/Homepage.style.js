/** @format */

import { StyleSheet } from "react-native";
import globals from "../globals";
export const dashboard= StyleSheet.create({
	pageTitleGroup: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 20,
	},
	textTitle: {
		color: globals.mainColor,
		fontSize: 16,
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
	btnGroup: {
		marginTop: 16,
		marginBottom: 26,
		flexDirection: "row",
		width: "100%",
		gap: 15,
	},
	withdrawBtn: {
		backgroundColor: globals.mainColor,
		width: "47.8%",
		paddingVertical: 14,
		paddingHorizontal: 20,
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
		borderRadius: 6,
	},
	withdrawBtnText: {
		color: globals.textColor,
		fontSize: 16,
		fontWeight: 400,
	},
	statisticsContainer: {
		backgroundColor: "#F8F8F8",
		height: 418,
		width: "100%",
		marginBottom: 20,
		borderRadius: 6,
		paddingVertical: 28,
		paddingHorizontal: 16,
	},
});

// export default homestyles
