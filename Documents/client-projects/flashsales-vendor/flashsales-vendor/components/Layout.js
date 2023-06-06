import React from "react"

import styles from "./Layout.style"
import { ScrollView,SafeAreaView } from "react-native"
import globals from "../globals"
import { StatusBar } from "expo-status-bar"

function Layout({ children }) {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				style='inverted'
				animated={true}
				backgroundColor={globals.mainColor}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}>
				{children}
			</ScrollView>
		</SafeAreaView>
	)
}

export default Layout
