/** @format */

import React, { useState } from "react";

import { TouchableOpacity, Text, View } from "react-native";
import { Image } from "react-native";

import {
	MaterialIcons,
	MaterialCommunityIcons,
	Feather,
} from "@expo/vector-icons";
import CardBalance from "../components/CardBalance";
import StatCard from "../components/StatCard";
import Modal from "react-native-modal";
import DeliveryRequestIco from "../icons/DeliveryRequestIco.svg";
import Layout from "../components/Layout";
import { dashboard } from "./Homepage.style";
import globals from "../globals";
function Dashboard({ navigation }) {
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<Layout>
			<View style={{ marginHorizontal: 20 }}>
				<View>
					<Modal isVisible={modalVisible}>
						<View
							style={{
								backgroundColor: "#fff",
								minHeight: 252,
								alignItems: "center",
								padding: 24,
								borderRadius: 10,
							}}
						>
							<View
								style={{
									alignItems: "center",
									gap: 16,
								}}
							>
								<Text
									style={{
										fontWeight: 600,
										fontSize: 20,
										color: globals.mainColor,
									}}
								>
									Delivery Request
								</Text>
								<DeliveryRequestIco width={120} height={40} />
								<View>
									<Text
										style={{
											fontWeight: 500,
											fontSize: 18,
											color: globals.blackText,
										}}
									>
										You have a food delivery
									</Text>
									<Text
										style={{
											fontWeight: 500,
											fontSize: 18,
											color: globals.blackText,
											textAlign: "center",
										}}
									>
										request.
									</Text>
								</View>
							</View>
							<View
								style={{
									width: "100%",
									flexDirection: "row",
									gap: 10,
									marginTop: 16,
								}}
							>
								<TouchableOpacity
									onPress={() => {
										setModalVisible(false), navigation.navigate("Orders");
									}}
									style={{
										backgroundColor: globals.mainColor,
										paddingHorizontal: 8,
										paddingVertical: 8,
										height: 41,
										width: "48%",
										justifyContent: "center",
										alignItems: "center",
										borderRadius: 6,
									}}
								>
									<Text
										style={{
											color: "#CAEFFB",
											fontSize: 14,
											fontWeight: 400,
										}}
									>
										View
									</Text>
								</TouchableOpacity>
								<TouchableOpacity
									onPress={() => setModalVisible(false)}
									style={{
										width: "48%",
										paddingHorizontal: 8,
										paddingVertical: 8,
										height: 41,
										justifyContent: "center",
										alignItems: "center",
										borderRadius: 6,
										borderColor: globals.mainColor,
										borderWidth: 1,
									}}
								>
									<Text
										style={{
											color: globals.mainColor,
											fontSize: 14,
											fontWeight: 400,
										}}
									>
										Cancel
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</Modal>
				</View>
				<View style={dashboard.pageTitleGroup}>
					<Text style={dashboard.textTitle}>Hello, Albert Enejeh</Text>

					<View style={dashboard.titleCta}>
						<MaterialIcons name="dashboard" size={24} color="#0468BF" />
						<TouchableOpacity
							onPress={() => navigation.navigate("Notification")}
						>
							<Image source={require("../assets/NotificationIco.png")} />
						</TouchableOpacity>
					</View>
				</View>

				<Text
					style={{
						marginBottom: 16,
						color: globals.mainColor,
						fontSize: 20,
						fontWeight: 600,
					}}
				>
					My Dashboard
				</Text>
				<CardBalance />
				<View style={dashboard.btnGroup}>
					<TouchableOpacity
						onPress={() => navigation.navigate("withdrawal")}
						style={dashboard.withdrawBtn}
					>
						<Image source={require("../assets/WithdrawIco.png")} />
						<Text style={dashboard.withdrawBtnText}>Withdraw</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => setModalVisible(true)}
						style={dashboard.withdrawBtn}
					>
						<Feather name="plus" size={24} color="#ffffff" />
						<Text style={dashboard.withdrawBtnText}>Deposit</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("orders")}
					style={{
						backgroundColor: "#CAEFFB",
						height: 100,
						marginVertical: 10,
						borderRadius: 10,
						display: "//grid//",
						flexDirection: "row",
						marginBottom: 30,
					}}
				>
					<View style={{ marginVertical: 30, marginHorizontal: 30 }}>
						<Image source={require("../assets/time.png")} />
					</View>
					<View style={{ paddingTop: 25 }}>
						<Text style={{ color: "#0468BF", fontSize: 16 }}>Pending</Text>
						<Text
							style={{ color: "#0468BF", textAlign: "center", fontSize: 14 }}
						>
							Awaiting Request
						</Text>
					</View>
				</TouchableOpacity>
				<View style={dashboard.statisticsContainer}>
					<View>
						<Text
							style={{
								color: globals.blackText,
								fontWeight: 600,
								fontSize: 16,
								marginBottom: 16,
							}}
						>
							Daily Statistics
						</Text>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								// backgroundColor: "green",
								gap: 23,
							}}
						>
							<StatCard
								price={"$3,000"}
								textOne={"Total"}
								textTwo={"Earnings"}
								image={<Image source={require("../assets/noun-money.png")} />}
							/>
							<StatCard
								price={"24"}
								textOne={"Total"}
								textTwo={"Orders"}
								image={
									<Image source={require("../assets/noun-shopping-cart.png")} />
								}
							/>
							<StatCard
								price={"4.6"}
								textOne={"Total"}
								textTwo={"Ratings"}
								image={<Image source={require("../assets/noun-star.png")} />}
							/>
						</View>
					</View>
					<View>
						<Text
							style={{
								color: globals.blackText,
								fontWeight: 600,
								fontSize: 16,
								marginBottom: 16,
								marginTop: 32,
							}}
						>
							Overall Statistics
						</Text>
						<View
							style={{
								flexDirection: "row",
								width: "100%",
								// backgroundColor: "green",
								gap: 23,
							}}
						>
							<StatCard
								price={"$3,000"}
								textOne={"Total"}
								textTwo={"Earnings"}
								image={<Image source={require("../assets/noun-money.png")} />}
							/>
							<StatCard
								price={"24"}
								textOne={"Total"}
								textTwo={"Orders"}
								image={
									<Image source={require("../assets/noun-shopping-cart.png")} />
								}
							/>
							<StatCard
								price={"4.6"}
								textOne={"Total"}
								textTwo={"Ratings"}
								image={<Image source={require("../assets/noun-star.png")} />}
							/>
						</View>
					</View>
				</View>
			</View>
		</Layout>
	);
}

export default Dashboard;
