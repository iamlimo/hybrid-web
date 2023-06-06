/** @format */

import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
// import { StyleSheet, View } from "react-native";
import { dashboard } from "./dashboardStyle";
// import { adress } from "./adressstyle";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	SafeAreaView,
	Image,
	Button,
} from "react-native";
import UploadSmall from "../uploadsmall/UploadSmall";
import { ScrollView } from "react-native-gesture-handler";
export default function Map({ navigation }) {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	console.log(location, "locationss");
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<View
					style={{
						display: "//grid//",
						flexDirection: "row",
						marginHorizontal: 20,
					}}
				>
					<TouchableOpacity
						style={{ marginTop: 7, marginRight: 10 }}
						onPress={() => navigation.navigate("dashboards")}
					>
						<AntDesign
							name="left"
							size={20}
							style={{ marginTop: 10 }}
							color="black"
						/>
					</TouchableOpacity>
					<View>
						<Text
							style={{
								fontFamily: "PoppinsSemiBold",
								fontSize: 20,
								color: "#0468BF",
								marginTop: 15,
								marginBottom: -20,
							}}
						>
							Order Tracking
						</Text>
					</View>
				</View>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 184.57,
						longitude: 7.38697,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}
				/>
				<View
					style={{
						display: "//grid//",
						flexDirection: "row",
						marginHorizontal: 20,
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontFamily: "PoppinsSemiBold",
							textAlign: "center",
							fontSize: 15,
							color: "#605979",
							marginTop: 20,
							marginBottom: 10,
						}}
					>
						Delivery distance
					</Text>
					<Text
						style={{
							fontFamily: "PoppinsBold",
							textAlign: "center",
							fontSize: 15,
							color: "#171520",
							marginTop: 20,
							marginBottom: 10,
						}}
					>
						50km
					</Text>
				</View>
				<View
					style={{
						backgroundColor: "#F8F8F8",
						marginBottom: 20,
						borderRadius: 10,
					}}
				>
					<View
						style={{
							display: "//grid//",
							flexDirection: "row",
							padding: 20,
							// justifyContent: "space-between",
							borderRadius: 10,
							maxWidth: "100%",
						}}
					>
						<View style={{ width: "20%" }}>
							<UploadSmall />
						</View>

						<View style={{ width: "60%" }}>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979",
								}}
							>
								From
							</Text>
							<Text
								style={{
									fontFamily: "PoppinsBold",
									display: "//grid//",
									flexDirection: "row",
									color: "#171520",
									justifyContent: "space-between",
									borderRadius: 10,
									// marginHorizontal: 20,
									fontSize: 15,
									// overflow: "none",
								}}
							>
								Tina Vargayee
							</Text>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979 ",
									overflow: "none",
								}}
							>
								<Ionicons name="location-outline" size={24} color="#605979" />
								Wuse zone 5 Abuja destrict{"\n"} Opp Banzo Plaza
							</Text>
						</View>
					</View>
					<View
						style={{
							display: "//grid//",
							flexDirection: "row",
							padding: 20,
							// justifyContent: "space-between",
							borderRadius: 10,
							maxWidth: "100%",
						}}
					>
						<View style={{ width: "20%" }}>
							<UploadSmall />
						</View>

						<View style={{ width: "60%" }}>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979",
								}}
							>
								To
							</Text>
							<Text
								style={{
									fontFamily: "PoppinsBold",
									display: "//grid//",
									flexDirection: "row",
									color: "#171520",
									justifyContent: "space-between",
									borderRadius: 10,
									// marginHorizontal: 20,
									fontSize: 15,
									overflow: "none",
								}}
							>
								Kenneth Okonkwo
							</Text>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979 ",
									overflow: "none",
								}}
							>
								<Ionicons name="location-outline" size={24} color="#605979" />
								Wuse zone 5 Abuja destrict{"\n"} Opp Banzo Plaza
							</Text>
						</View>
					</View>
					<View
						style={{
							flexDirection: "row",
							display: "flex",
							// width: "100%",
							justifyContent: "space-between",
							marginHorizontal: 10,
							marginBottom: 20,
						}}
					></View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ffffffff",
	},
	map: {
		marginHorizontal: 20,
		width: "90%",
		height: "100%",
		borderRadius: 10,
		marginVertical: 20,
	},
});
