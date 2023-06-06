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

export default function AssignRider({ navigation }) {
	const [rate, setRatting] = useState("4.5");

	const [image3, setImage3] = useState(false);

	const [description, setDescription] = useState(false);
	const [image1, setImage1] = useState(false);
	const [image2, setImage2] = useState(false);

	const [image4, setImage4] = useState(false);

	const manageImageVisibility = () => {
		setImage1(!image1);
	};
	const manageImageVisibility2 = () => {
		setImage2(!image2);
	};

	const manageImageVisibility4 = () => {
		setImage4(!image4);
	};
	const manageImageVisibility3 = () => {
		setImage3(!image3);
	};
	const desc = () => {
		setDescription(!description);
	};
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
							onPress={() => navigation.navigate("dashboards")}
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
								Assign order to delivery man{" "}
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
					<View style={dashboard.rattingGroup}>
						<View style={dashboard.productrating}>
							<TextInput
								style={dashboard.productinput}
								autoCapitalize="none"
								autoCorrect={false}
								defaultValue={rate}
								onChangeText={(rates) => setRatting(rates)}
							/>
							<Image
								// style={{ height: 120, borderRadius: "10%" }}
								source={require("../assets/start.png")}
							/>
						</View>

						<View>
							<View>
								<Text style={dashboard.averagerating}>Vicent Lobo</Text>
							</View>
							<View>
								<Text style={dashboard.ratingReview}>20/03/2023</Text>
							</View>
						</View>
					</View>
					<View>
						<View>
							<Text style={dashboard.comments}>
								Must go for the class feel.
							</Text>
						</View>
						<View>
							<Text style={dashboard.lorem}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
								nemo quo sed illo assumenda
							</Text>
						</View>
					</View>
					<View
						style={{
							borderTop: 1,

							width: 440,
							marginVertical: 20,
							borderWidth: 1,
							borderColor: "#F1F1F1",
						}}
					></View>
					<View style={dashboard.rattingGroup}>
						<View style={dashboard.productrating}>
							<TextInput
								style={dashboard.productinput}
								autoCapitalize="none"
								autoCorrect={false}
								defaultValue={rate}
								onChangeText={(rates) => setRatting(rates)}
							/>
							<Image
								// style={{ height: 120, borderRadius: "10%" }}
								source={require("../assets/start.png")}
							/>
						</View>

						<View>
							<View>
								<Text style={dashboard.averagerating}>Vicent Lobo</Text>
							</View>
							<View>
								<Text style={dashboard.ratingReview}>20/03/2023</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate("review")}>
						<View>
							<Text style={dashboard.comments}>
								Must go for the class feels.
							</Text>
						</View>
						<View>
							<Text style={dashboard.lorem}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
								nemo quo sed illo assumenda fugiat provident iste nam veritatis?
								Fugiat nihil facere labore obcaecati similique quae culpa
								commodi enim deserunt.
							</Text>
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
					</TouchableOpacity>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
