/** @format */

import React, { useEffect, useRef, useState } from "react";
import {
	View,
	ScrollView,
	Text,
	Image,
	Dimensions,
	Button,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
} from "react-native";
import {
	MaterialCommunityIcons,
	AntDesign,
	Ionicons,
} from "@expo/vector-icons";
import { dashboard } from "./dashboardStyle";
import RiderImage from "./RiderImage";

export default function ActiveOrder({ navigation }) {
	const [rate, setRatting] = useState("4.5");

	return (
		<SafeAreaView style={dashboard.mainContainer}>
			<View style={dashboard.containerproduct}>
				<ScrollView
					style={dashboard.nullGroup}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
				>
					<View style={dashboard.group}>
						<TouchableOpacity
							style={dashboard.back}
							onPress={() => navigation.navigate("orderhistroy")}
						>
							<Ionicons name="chevron-back" size={24} color="black" />
						</TouchableOpacity>
						<View>
							<Text
								style={{
									fontFamily: "PoppinsSemiBold",
									fontSize: 20,
									color: "#0468BF",
									marginTop: 5,
									marginBottom: 10,
								}}
							>
								Active Order
							</Text>
						</View>
					</View>

					<View
						style={{
							justifyContent: "center",
							alignItems: "center",
							marginHorizontal: 20,
						}}
					>
						<RiderImage />
						<View>
							<Text
								style={{
									marginTop: -20,
									fontFamily: "PoppinsSemiBold",
									fontSize: 14,
									marginTop: 20,
									color: "#171520",
								}}
							>
								Vicent Lobo
							</Text>
						</View>
						<View>
							<Text style={dashboard.ratingReview}>5 Minutes away</Text>
						</View>
					</View>
					<View style={{ display: "//grid//", flexDirection: "row" }}>
						<TouchableOpacity
							onPress={() => navigation.navigate("myreview")}
							style={{
								marginHorizontal: 20,
								marginVertical: "10%",
								backgroundColor: "#3449ED",
								// display: "//grid//",
								flexDirection: "row",
								padding: 2,
								color: "#ffff",
								fontFamily: "Poppins",
								borderRadius: 7,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<MaterialCommunityIcons
								name="truck-outline"
								size={24}
								color="#ffffff"
								style={{ marginHorizontal: 10 }}
							/>
							<Button
								onPress={() => navigation.navigate("myreview")}
								color="#ffffff"
								title="Assign Delivery"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("paceldelivery")}
							style={{
								marginHorizontal: 10,
								marginVertical: "10%",
								backgroundColor: "#E4FAD3",
								display: "//grid//",
								flexDirection: "row",
								// padding: 10,
								color: "#ffff",
								fontFamily: "Poppins",
								borderRadius: 7,
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Ionicons name="call-outline" size={24} color="#36A825" />
							<Button color="#36A825" title="Call" />
						</TouchableOpacity>
					</View>
					<View
						style={{
							borderTop: 1,

							width: 440,
							marginVertical: 10,
							borderWidth: 1,
							borderColor: "#F1F1F1",
						}}
					></View>
					<View
						style={{
							backgroundColor: "#FEF4CB",

							fontFamily: "Poppins",
							width: "40%",
							fontSize: 12,
							borderRadius: 10,
							// paddingHorizontal: 10,
						}}
					>
						<Button
							onPress={() => navigation.navigate("activeorder")}
							title="In progress"
							color="#FCA800"
							style={{
								fontFamily: "Poppins",

								fontSize: 12,
							}}
						/>
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginVertical: 20,
						}}
					>
						<View>
							<Text
								style={{
									fontFamily: "Poppins",

									fontSize: 15,
									color: "#605979",
								}}
							>
								Delivery Charge
							</Text>
						</View>
						<View>
							<Text
								style={{
									fontFamily: "PoppinsBold",

									fontSize: 15,
									color: "#171520",
								}}
							>
								$34
							</Text>
						</View>
					</View>
					<View style={{ flexDirection: "row" }}>
						<Text
							style={{
								fontFamily: "PoppinsSemiBold",
								textAlign: "center",
								fontSize: 15,
								color: "#0468BF",
								marginTop: 20,
								marginBottom: 10,
							}}
						>
							Shipping / delivery address
						</Text>
					</View>
					<View
						style={{
							backgroundColor: "#F2F2F2",
							borderRadius: 8,
							display: "flex",
							flexDirection: "row",
							padding: 10,
							// justifyContent: "space-between",
							borderRadius: 10,
							// marginHorizontal: 20,
						}}
					>
						<Ionicons name="location-outline" size={24} color="#0468BF" />
						<View>
							<Text
								style={{
									fontFamily: "PoppinsSemiBold",
									// textAlign: "center",
									fontSize: 15,
									color: "#171520",
									padding: 5,
								}}
							>
								Ruby S Snively
							</Text>
							<Text
								style={{
									fontFamily: "Poppins",
									// textAlign: "center",
									fontSize: 15,
									color: "#605979",
									padding: 5,
								}}
							>
								14, Lateef Onigemo street,{"\n"} Ifako Gbagada - Lagos{"\n"}
								Apt. 4B{"\n"}
								+234 813 123 4567
							</Text>
						</View>
						<TouchableOpacity
							onPress={() => refRBSheet.current.open()}
						></TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
