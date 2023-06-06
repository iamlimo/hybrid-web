/** @format */

import "react-native-gesture-handler";
// import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import UploadFiles from "../profile/UploadFiles";
import SetLocations from "../AuthPages/SetLocations";
import ProfileInformation from "../profile/ProfileInformation";
import Dashboard from "../HomePages/Dashboard";
import Orders from "../OrdersPages/Orders";
////createcredentilas/////
// import { MaterialCommunityIcons, AntDesign,Ionicons  } from "@expo/vector-icons";
import { MaterialIcons, Octicons, Feather } from "@expo/vector-icons";
import AssignRider from "../OrdersPages/AssignRider";
import MyReview from "../OrdersPages/MyReview";
import Map from "../OrdersPages/Map";
import OrderHistroy from "../OrdersPages/OrderHistroy";
import ActiveOrder from "../OrdersPages/ActiveOrder";
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
SplashScreen.preventAutoHideAsync();

function RootStack({}) {
	const [fontsLoaded] = useFonts({
		Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
		PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
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
	function TabNavigator() {
		return (
			<Tab.Navigator>
				<Tab.Screen
					name="homes"
					options={{
						headerShown: false,
						tabBarIcon: ({ color }) => (
							<Octicons
								name="home"
								size={24}
								activeColor="#0257C0"
								color="#61BAEB"
							/>
						),
						inactiveIcon: <Octicons name="home" size={24} color="#0257C0" />,
					}}
					component={Dashboard}
				/>
				<Tab.Screen
					name="orderhistroy"
					options={{
						headerShown: false,
						tabBarIcon: ({ color }) => (
							<Image
								activeColor="#0257C0"
								color="#61BAEB"
								source={require("../assets/orderhistroy.png")}
							/>
						),
						inactiveIcon: <Octicons name="home" size={24} color="#0257C0" />,
					}}
					component={OrderHistroy}
				/>
			</Tab.Navigator>
		);
	}
	return (
		<NavigationContainer>
			<View onLayout={onLayoutRootView}></View>
			<Stack.Navigator>
				<Stack.Screen
					name="uploadfiles"
					component={UploadFiles}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="locations"
					component={SetLocations}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="profileinformation"
					component={ProfileInformation}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="home"
					component={TabNavigator}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="orders"
					component={Orders}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>

				<Stack.Screen
					name="asignrider"
					component={AssignRider}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="myreview"
					component={MyReview}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="map"
					component={Map}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="orderhistroy"
					component={OrderHistroy}
					options={{
						title: "Splash Screen",
						headerShown: false, //Set Header Title
					}}
				/>
				<Stack.Screen
					name="activeorder"
					component={ActiveOrder}
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
