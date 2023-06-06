import React from "react"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import PhoneIco from "../icons/CallIco.svg"
import LocationIco from "../icons/LocationIco.svg"
import AcceptIco from "../icons/AcceptIco.svg"
import RejectIco from "../icons/RejectIco.svg"
import MapsIco from "../icons/MapsIco.svg"
import globals from "../globals"

function OrderCard({ completed, navigation }) {
	return (
		<View style={styles.OrderCardContainer}>
			<View style={styles.CardContentContainer}>
				<View style={styles.ImageContainer}>
					<Image
						style={styles.Image}
						source={require("../assets/avatars-1.png")}
					/>
				</View>

				<View style={styles.TextGroup}>
					<Text style={styles.Cardtitle}>From</Text>
					<Text style={styles.CardMainTitle}>Chitis</Text>
					<View style={styles.CardLocationGroup}>
						<LocationIco width={"16"} height={"16"} />
						<Text style={styles.CardLocation}>
							1A Ezillo Ave, Independence Layout 400102, Enugu
						</Text>
					</View>
				</View>
				<View style={styles.PhoneIcoContainer}>
					<TouchableOpacity
						style={{
							width: 36,
							height: 36,
							borderRadius: 100,
							backgroundColor: "#FFF",
							justifyContent: "center",
							alignItems: "center",
						}}>
						<PhoneIco />
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.CardContentContainer}>
				<View style={styles.ImageContainer}>
					<Image
						style={styles.Image}
						source={require("../assets/avatars-2.png")}
					/>
				</View>

				<View style={styles.TextGroup}>
					<Text style={styles.Cardtitle}>To</Text>
					<Text style={styles.CardMainTitle}>Tina Vargayee</Text>
					<View style={styles.CardLocationGroup}>
						<LocationIco width={"16"} height={"16"} />
						<Text style={styles.CardLocation}>
							1A Ezillo Ave, Independence Layout 400102, Enugu
						</Text>
					</View>
				</View>
				<View style={styles.PhoneIcoContainer}>
					<TouchableOpacity style={styles.Phone}>
						<PhoneIco />
					</TouchableOpacity>
				</View>
			</View>
			{!completed && (
				<>
					<View style={styles.OrderActionGroup}>
						<TouchableOpacity style={styles.OrderAccept}>
							<AcceptIco />
							<Text style={styles.OrderAcceptText}>Accept Order</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.OrderDecline}>
							<RejectIco />
							<Text style={styles.OrderDeclineText}>Decline Order</Text>
						</TouchableOpacity>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => navigation.navigate("Map")}
							style={styles.mapsBtn}>
							<MapsIco />
							<Text
								style={{
									color: "#FFFFFF",
									fontSize: 14,
									// fontFamily: ,
									fontWeight: 600,
								}}>
								View in map
							</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
		</View>
	)
}

export default OrderCard

// Hug (332px)
const styles = StyleSheet.create({
	OrderCardContainer: {
		minHeight: 198,
		backgroundColor: "#F8F8F8",
		borderRadius: 6,
		paddingHorizontal: 16,
		paddingVertical: 14,
		gap: 20,
	},
	CardContentContainer: {
		flexDirection: "row",
		gap: 4,
		alignItems: "flex-start",
	},
	ImageContainer: {
		width: "15%",
	},
	Image: {
		width: 36,
		height: 36,
	},
	Cardtitle: {
		fontWeight: 500,
		fontSize: 16,
		color: globals.captionText,
	},
	CardMainTitle: {
		fontWeight: 700,
		fontSize: 19,
		color: globals.blackText,
	},
	CardLocation: {
		fontWeight: 400,
		fontSize: 14,
		color: globals.captionText,
	},
	TextGroup: {
		width: "70%",
		gap: 6,
	},
	CardLocationGroup: {
		flexDirection: "row",
		alignItems: "flex-start",
		gap: 4,
	},

	PhoneIcoContainer: {
		width: "20%",
	},
	Phone: {
		width: 36,
		height: 36,
		borderRadius: 100,
		backgroundColor: "#FFF",
		justifyContent: "center",
		alignItems: "center",
	},
	OrderActionGroup: {
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 14,
	},
	OrderAccept: {
		backgroundColor: "#E4FAD3",
		width: "48%",
		paddingHorizontal: 12,
		paddingVertical: 9,
		flexDirection: "row",
		alignItems: "center",
		gap: 9,
		borderRadius: 8,
	},
	OrderDecline: {
		backgroundColor: "#FDE2D0",
		width: "48%",
		paddingHorizontal: 12,
		paddingVertical: 9,
		flexDirection: "row",
		alignItems: "center",
		gap: 9,
		borderRadius: 8,
	},
	OrderAcceptText: {
		color: "#36A825",
		fontSize: 14,
		// fontFamily: ,
		fontWeight: 600,
	},
	OrderDeclineText: {
		color: "#DB271A",
		fontSize: 14,
		// fontFamily: ,
		fontWeight: 600,
	},
	mapsBtn: {
		backgroundColor: "#3449ED",
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		height: 41,
		borderRadius: 8,
		padding: 8,
		gap: 9.5,
	},
})
