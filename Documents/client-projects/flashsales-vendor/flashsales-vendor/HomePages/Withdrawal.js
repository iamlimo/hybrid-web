import React, { useState } from "react"
import Layout from "../../components/Layout"
import { Image, Text, TouchableOpacity, View, Dimensions } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import WithdrawalCard from "../../components/WithdrawalCard"
import globals from "../../globals"
import Button from "../../components/Button"
import Header from "../../components/Header"

const windowDimensions = Dimensions.get("window")
const screenDimensions = Dimensions.get("screen")

function Withdrawal({ navigation }) {
	const [withdrawalCount, setWithdrawalCount] = useState(4)
	return (
		<>
			<Header title={"Withdrawal"} navigation={navigation} />
			<Layout>
				{withdrawalCount ? (
					<>
						<View style={{ marginBottom: 10 }}>
							<Text
								style={{
									fontSize: 16,
									fontWeight: 500,
									color: globals.captionText,
									marginTop: 24,
									marginBottom: 16,
								}}>
								{withdrawalCount} {`Withdrawal(s)`}
							</Text>
							<View style={{ gap: 16, marginBottom: 16 }}>
								<WithdrawalCard />
								<WithdrawalCard />
								<WithdrawalCard />
								<WithdrawalCard />
								<WithdrawalCard />
							</View>
							<Button title={"New withdrawal"} />
						</View>
					</>
				) : (
					<EmptyState />
				)}
			</Layout>
		</>
	)
}

export default Withdrawal

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
					It seems you have not made any
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 500 }}>transaction yet.</Text>
			</View>
			<Button title={"New withdrawal"} />
		</>
	)
}
