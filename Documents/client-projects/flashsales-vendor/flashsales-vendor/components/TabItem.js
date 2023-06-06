import React from "react"
import { Text, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import globals from "../../globals"

function TabItem() {
	return (
		<TouchableOpacity
			style={
				order === true ? styles.activetabSwitch : styles.inactivetabSwitch
			}>
			<Text
				style={
					order === true ? styles.activetabText : styles.inactivetabSwitch
				}>
				Active Orders
			</Text>
		</TouchableOpacity>
	)
}

export default TabItem

const styles = StyleSheet.create({})
