import React, { useState } from "react"
import Layout from "../../components/Layout"
import { Image, Text, TouchableOpacity, View, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import globals from "../../globals"
import Button from "../../components/Button"
import Header from "../../components/Header"
import NotificationCard from "../../components/NotificationCard"

const screenDimensions = Dimensions.get("screen")

function Notification({ navigation }) {
	const [notificationCount, setnotificationCount] = useState(4)
	return (
		<>
			<Header title={"Notification"} navigation={navigation} />
			<Layout>
				{notificationCount ? (
					<>
						<View style={{ marginBottom: 10 }}>
							<View style={{ gap: 16, marginBottom: 16 }}>
								<NotificationCard
									title={"Requested new order"}
									name={"Tina Vargaryee"}
									time={"9:15AM"}
									image={<Image source={require("../../assets/avatars.png")} />}
								/>
								<NotificationCard
									title={"Requested new order"}
									name={"Adam Scott"}
									time={"7:15AM"}
									image={
										<Image source={require("../../assets/avatars-1.png")} />
									}
								/>
								<NotificationCard
									title={"Left 4.6 rating"}
									name={"John Doe"}
									time={"9:15AM"}
									image={
										<Image source={require("../../assets/noun-star.png")} />
									}
								/>
								<NotificationCard
									title={"Requested new order"}
									name={"Virginia Edith"}
									time={"10:15AM"}
									image={
										<Image source={require("../../assets/avatars-2.png")} />
									}
								/>
							</View>
						</View>
					</>
				) : (
					<EmptyState />
				)}
			</Layout>
		</>
	)
}

export default Notification

function EmptyState() {
	// console.log(windowDimensions)
	// console.log(screenDimensions)
	return (
		<>
			<View
				style={{
					alignItems: "center",
					justifyContent: "center",
					// backgroundColor: "red",
					height: screenDimensions.height - 250,
				}}>
				<Image source={require("../../assets/EmptyWithdraw.png")} />
				<Text
					style={{
						fontSize: 28,
						fontWeight: 700,
						marginBottom: 16,
						marginTop: 24,
					}}>
					Nothing found!!!
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 500 }}>
					It seems you don't have any
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 500 }}>
					notifications yet.
				</Text>
			</View>
			<Button title={"New withdrawal"} />
		</>
	)
}
