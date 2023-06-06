/** @format */

import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import { TouchableOpacity, Text, View, Button } from "react-native";
import { Image } from "react-native";
import styles from "./OrderPages.style";
import UploadSmall from "../uploadsmall/UploadSmall.jsx";
import SelectDriver from "./SelectDriver";
import {
	MaterialCommunityIcons,
	AntDesign,
	Ionicons,
} from "@expo/vector-icons";
function Orders({ navigation }) {
	const [order, setOrder] = useState(true);
	const refRBSheet = useRef();
	return (
		<Layout>
			<View style={{ marginHorizontal: 20 }}>
				<View
					style={{
						flexDirection: "row",

						alignItems: "center",
						marginVertical: 20,
					}}
				>
					<View style={{ marginRight: 10 }}>
						<TouchableOpacity
							// style={dashboard.back}
							onPress={() => navigation.navigate("dashboards")}
						>
							<Ionicons name="chevron-back" size={24} color="black" />
						</TouchableOpacity>
					</View>
					<Text style={styles.textTitle}>Pending Request</Text>
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
							justifyContent: "space-between",
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
									marginLeft: 20,
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
									marginLeft: 20,
									fontSize: 15,
									overflow: "none",
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
									marginLeft: 20,
								}}
							>
								<Ionicons name="location-outline" size={24} color="#605979" />
								Wuse zone 5 Abuja destrict{"\n"} Opp Banzo Plaza
							</Text>
						</View>

						<TouchableOpacity style={{ width: "20%" }}>
							<Image
								style={{
									margin: 20,
								}}
								source={require("../assets/calltracker.png")}
							/>
						</TouchableOpacity>
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
							<Image
								style={
									{
										// margin: 20,
									}
								}
								source={require("../assets/bug.png")}
							/>
						</View>

						<View style={{ width: "60%", marginLeft: 20 }}>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979",
								}}
							>
								Ordered
							</Text>
							<Text
								style={{
									fontFamily: "PoppinsBold",
									display: "//grid//",
									flexDirection: "row",
									color: "#171520",

									borderRadius: 10,
									// marginHorizontal: 20,
									fontSize: 14,
									overflow: "none",
								}}
							>
								Burger
							</Text>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979 ",
									overflow: "none",
								}}
							>
								With Iceing
							</Text>
							<Text
								style={{
									fontFamily: "PoppinsBold",
									display: "//grid//",
									flexDirection: "row",
									color: "#171520",
									borderRadius: 10,
									// marginHorizontal: 20,
									fontSize: 14,
									overflow: "none",
								}}
							>
								$56.90
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
					>
						<TouchableOpacity
							onPress={() => navigation.navigate("oderplaced")}
							style={{
								// marginHorizontal: 20,
								// marginTop: "25%",
								backgroundColor: "#3449ED",
								// alignItems: "center",
								// justifyContent: "center",
								padding: 10,
								color: "#ffff",
								fontFamily: "Poppins",
								borderRadius: 10,
								padding: 5,
								flexDirection: "row",
								display: "flex",
							}}
						>
							<Image
								style={{
									color: "#ffff",
									marginTop: 5,
								}}
								source={require("../assets/accept.png")}
							/>
							<Button color="#ffffff" title="Accept Order" />
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("oderplaced")}
							style={{
								flexDirection: "row",
								display: "flex",
								backgroundColor: "#FDE2D0",
								// alignItems: "center",
								// justifyContent: "center",
								padding: 10,
								color: "#ffff",
								fontFamily: "Poppins",
								borderRadius: 10,
								padding: 5,
							}}
						>
							<Image
								style={{
									color: "#ffff",
									marginTop: 5,
								}}
								source={require("../assets/reject.png")}
							/>
							<Button color="#DB271A" title="Decline Order" />
						</TouchableOpacity>
					</View>
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
							justifyContent: "space-between",
							borderRadius: 10,
							maxWidth: "100%",
						}}
					>
						<View style={{ width: "20%" }}>
							<UploadSmall />
						</View>

						<View style={{ width: "60%", marginLeft: 20 }}>
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
									overflow: "none",
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

						<TouchableOpacity style={{ width: "20%" }}>
							<Image
								style={{
									margin: 20,
								}}
								source={require("../assets/calltracker.png")}
							/>
						</TouchableOpacity>
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
							<Image
								style={
									{
										// margin: 20,
									}
								}
								source={require("../assets/bug.png")}
							/>
						</View>

						<View style={{ width: "60%", marginLeft: 20 }}>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979",
								}}
							>
								Ordered
							</Text>
							<Text
								style={{
									fontFamily: "PoppinsBold",
									display: "//grid//",
									flexDirection: "row",
									color: "#171520",

									borderRadius: 10,
									// marginHorizontal: 20,
									fontSize: 14,
									overflow: "none",
								}}
							>
								Burger
							</Text>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979 ",
									overflow: "none",
								}}
							>
								With Iceing
							</Text>
							<Text
								style={{
									fontFamily: "PoppinsBold",
									display: "//grid//",
									flexDirection: "row",
									color: "#171520",
									borderRadius: 10,
									// marginHorizontal: 20,
									fontSize: 14,
									overflow: "none",
								}}
							>
								$56.90
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
					>
						<TouchableOpacity
							onPress={() => refRBSheet.current.open()}
							style={{
								// marginHorizontal: 20,
								// marginTop: "25%",
								backgroundColor: "#3449ED",
								// alignItems: "center",
								// justifyContent: "center",
								padding: 10,
								color: "#ffff",
								fontFamily: "Poppins",
								borderRadius: 10,
								padding: 5,
								flexDirection: "row",
								display: "flex",
							}}
						>
							<Image
								style={{
									color: "#ffff",
									marginTop: 5,
								}}
								source={require("../assets/accept.png")}
							/>
							<Button
								onPress={() => refRBSheet.current.open()}
								color="#ffffff"
								title="Accept Order"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("oderplaced")}
							style={{
								flexDirection: "row",
								display: "flex",
								backgroundColor: "#FDE2D0",
								// alignItems: "center",
								// justifyContent: "center",
								padding: 10,
								color: "#ffff",
								fontFamily: "Poppins",
								borderRadius: 10,
								padding: 5,
							}}
						>
							<Image
								style={{
									color: "#ffff",
									marginTop: 5,
								}}
								source={require("../assets/reject.png")}
							/>
							<Button color="#DB271A" title="Decline Order" />
						</TouchableOpacity>
					</View>
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
							justifyContent: "space-between",
							borderRadius: 10,
							maxWidth: "100%",
						}}
					>
						<View style={{ width: "20%" }}>
							<UploadSmall />
						</View>

						<View style={{ width: "60%", marginLeft: 20 }}>
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
									overflow: "none",
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

						<TouchableOpacity style={{ width: "20%", marginLeft: 20 }}>
							<Image
								style={{
									margin: 20,
								}}
								source={require("../assets/calltracker.png")}
							/>
						</TouchableOpacity>
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
						<View style={{ width: "20%", marginLeft: 20 }}>
							<Image
								style={
									{
										// margin: 20,
									}
								}
								source={require("../assets/bug.png")}
							/>
						</View>

						<View style={{ width: "60%", marginLeft: 20 }}>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979",
								}}
							>
								Ordered
							</Text>
							<Text
								style={{
									fontFamily: "PoppinsBold",
									display: "//grid//",
									flexDirection: "row",
									color: "#171520",

									borderRadius: 10,
									// marginHorizontal: 20,
									fontSize: 14,
									overflow: "none",
								}}
							>
								Burger
							</Text>
							<Text
								style={{
									fontFamily: "Poppins",
									fontSize: 13,
									color: "#605979 ",
									overflow: "none",
								}}
							>
								With Iceing
							</Text>
							<Text
								style={{
									fontFamily: "PoppinsBold",
									display: "//grid//",
									flexDirection: "row",
									color: "#171520",
									borderRadius: 10,
									// marginHorizontal: 20,
									fontSize: 14,
									overflow: "none",
								}}
							>
								$56.90
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
					>
						<TouchableOpacity
							onPress={() => refRBSheet.current.open()}
							style={{
								// marginHorizontal: 20,
								// marginTop: "25%",
								backgroundColor: "#3449ED",
								// alignItems: "center",
								// justifyContent: "center",
								padding: 10,
								color: "#ffff",
								fontFamily: "Poppins",
								borderRadius: 10,
								padding: 5,
								flexDirection: "row",
								display: "flex",
							}}
						>
							<Image
								style={{
									color: "#ffff",
									marginTop: 5,
								}}
								source={require("../assets/accept.png")}
							/>
							<Button
								onPress={() => refRBSheet.current.open()}
								color="#ffffff"
								title="Accept Order"
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => navigation.navigate("oderplaced")}
							style={{
								flexDirection: "row",
								display: "flex",
								backgroundColor: "#FDE2D0",
								// alignItems: "center",
								// justifyContent: "center",
								padding: 10,
								color: "#ffff",
								fontFamily: "Poppins",
								borderRadius: 10,
								padding: 5,
							}}
						>
							<Image
								style={{
									color: "#ffff",
									marginTop: 5,
								}}
								source={require("../assets/reject.png")}
							/>
							<Button color="#DB271A" title="Decline Order" />
						</TouchableOpacity>
					</View>
					<SelectDriver refRBSheet={refRBSheet} navigation={navigation} />
				</View>
			</View>
		</Layout>
	);
}

export default Orders;
