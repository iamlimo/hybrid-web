/** @format */

import React, { useState } from "react";
import {
	View,
	ScrollView,
	Text,
	Button,
	TouchableOpacity,
	SafeAreaView,
	TextInput,
	Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
import { dashboard } from "./dashboardStyle";
import ImageTracker from "./ImageTracker";
// import { PageControl } from "react-native-ios-kit";
export default function Review({ navigation }) {
	const [rating, setRating] = useState(0);
	const [review, setReview] = useState();
	const [rate, setRatting] = useState("4.5");
	return (
		<SafeAreaView style={dashboard.mainContainer}>
			<View style={dashboard.container}>
				<ScrollView style={dashboard.nullGroup}>
					<View style={dashboard.group}>
						<TouchableOpacity
							style={dashboard.back}
							onPress={() => navigation.navigate("home")}
						>
							<Ionicons name="chevron-back" size={24} color="black" />
						</TouchableOpacity>
						<View>
							<Text style={dashboard.nullsearchtwo}>Deposit </Text>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => {
							navigation.navigate("asignrider");
							refRBSheet.current.close();
						}}
						style={{
							// backgroundColor: "#F1F1F1",
							display: "//grid//",
							flexDirection: "row",
							// padding: 20,
							// justifyContent: "space-between",
							borderRadius: 10,
							width: "100%",
							marginVertical: 20,
						}}
					>
						<View style={{ width: "15%" }}>
							<ImageTracker />
						</View>
						<View
							style={{ marginHorizontal: 20, marginVertical: 10, width: "50%" }}
						>
							<Text
								style={{
									fontFamily: "PoppinsSemiBold",
									// textAlign: "center",
									fontSize: "15",
									color: "#171520",
									// padding: 5,
								}}
							>
								Tina Vargayee
							</Text>
							<View>
								<Text
									style={{
										fontFamily: "Poppins",
										// textAlign: "center",
										fontSize: 15,
										color: "#605979",
										// marginHorizontal:5
									}}
								>
									Delivery Rider
								</Text>
							</View>
						</View>

						<View
							style={{
								display: "//grid//",
								flexDirection: "row",
								marginTop: 10,
								marginBottom: 20,
							}}
						>
							<View
								style={{
									display: "//grid//",
									flexDirection: "row",
									backgroundColor: "#F4F4F4",
									marginRight: 10,
									width: "40%",
									height: 30,
									padding: 5,
									borderRadius: 5,
								}}
							>
								<View style={{ marginRight: 5 }}>
									<TextInput
										style={{ color: "#000000" }}
										autoCapitalize="none"
										autoCorrect={false}
										defaultValue={rate}
										onChangeText={(rates) => setRatting(rates)}
									/>
								</View>
								<View>
									<Image source={require("../assets/start.png")} />
								</View>
							</View>
						</View>
					</TouchableOpacity>
					<View>
						<Text style={dashboard.nulltexttwo}>Review</Text>
					</View>

					<View>
						<Text style={dashboard.reviewbelow}>
							Please tell us about the service that was {"\n"}rendered to you
						</Text>
					</View>
					<View>
						<Text style={dashboard.reviewtext}>Delivery Rider Rating</Text>
						<StarRating rating={rating} onChange={setRating} />
					</View>

					<View>
						<Text style={dashboard.reviewtexttwo}>Review Description</Text>
						<TextInput
							defaultValue={review}
							multiline
							editable
							numberOfLines={4}
							onChangeText={(reviews) => setReview(reviews)}
							style={dashboard.reviewinput}
							placeholder="Enter Description"
						/>
					</View>

					<TouchableOpacity
						onPress={() => navigation.navigate("map")}
						style={dashboard.buttonreview}
					>
						<Button
							onPress={() => navigation.navigate("map")}
							color="#ffffff"
							title="Submit Review"
						/>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
