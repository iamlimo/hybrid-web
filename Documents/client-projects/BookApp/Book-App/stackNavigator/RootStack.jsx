/** @format */

// import "react-native-gesture-handler";
// import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
	FontAwesome,
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import Splash from "../signup/Splash";
import Signup from "../signup/SignUp";
import Verification from "../signup/Verification";
import Login from "../signup/login";
import PasswordReset from "../signup/PasswordReset";
import Prompt from "../signup/Prompt";
import Subscription from "../signup/Subscription";
import Sucess from "../signup/Sucess";
import Dashboard from "../dashboard/Dashboard";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

function RootStack({}) {
	function HeaderTitle({ navigation }) {
		return (
			<View
				style={{
					justifyContent: "flex-end",
					width: "100%",
					flexDirection: "row",
					marginLeft:"20%"
				}}
			>
				<FontAwesome
					name="group"
					size={24}
					color="black"
				/>
			</View>
		);
	}

	function Roots() {
		return (
			<Drawer.Navigator>
				<Drawer.Screen
					options={({ navigation }) => {
						return {
							drawerIcon: () => (
								<AntDesign name="home" size={24} color="#000000" />
							),

							headerTitle: () => <HeaderTitle navigation={navigation} />,
						};
					}}
					name="Home"
					component={Dashboard}
					initialParams={{ itemId: "" }}
				/>
			</Drawer.Navigator>
		);
	}
	function Tabs() {
		return (
			<Tab.Navigator
				screenOptions={{
					labelStyle: { fontSize: 22 },
					tabBarStyle: { backgroundColor: "#000000", color: "#ffff" },
					activeTintColor: "#FFD672",
					inactiveTintColor: "black",
				}}
			>
				<Tab.Screen
					name="dashboards"
					component={Roots}
					options={{
						headerShown: false,
						tabBarLabel: "Library",
						tabBarIcon: ({ color }) => (
							<Ionicons name="md-library-outline" size={24} color="#FFD672" />
						),
					}}
				/>
			</Tab.Navigator>
		);
	}
	const [fontsLoaded] = useFonts({
		Inter: require("../assets/fonts/Inter-Regular.ttf"),
		InterBold: require("../assets/fonts/Inter-Bold.ttf"),
	});
	const onLayoutRootView = async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	};

	if (!fontsLoaded) {
		return (
			<View>
				<Text>nothing to show</Text>
			</View>
		);
	}

	return (
		<NavigationContainer>
			<View onLayout={onLayoutRootView}></View>
			<Stack.Navigator initialRouteName="SplashScreens">
				<Stack.Screen
					name="splash"
					component={Splash}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="signup"
					component={Signup}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="tab"
					component={Tabs}
					options={{
						// title: "Transaction Summary",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="verification"
					component={Verification}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="login"
					component={Login}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="passwordreset"
					component={PasswordReset}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="prompt"
					component={Prompt}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="subscription"
					component={Subscription}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="sucess"
					component={Sucess}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default RootStack;
