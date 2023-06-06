/** @format */

import React, { useMemo, useState } from "react";
import {
	View,
	TextInput,
	Text,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	Image,
} from "react-native";

import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import RBSheet from "react-native-raw-bottom-sheet";
// import { profile } from "./profilestyle";
import { dashboard } from "./dashboardStyle";
import ImageTracker from "./ImageTracker";
// import { styles } from "../splashscreen/splash";
export default function SelectDriver({ navigation, refRBSheet }) {
	const [searchInput, setSearchInput] = useState("");
	const searchItems = (searchValue) => {
		setSearchInput(searchValue);
		if (searchInput !== "") {
			const filteredData = items?.filter((item) => {
				return Object.values(item)
					.join("")
					.toLowerCase()
					.includes(searchInput?.toLowerCase());
			});
			setFilteredResults(filteredData);
		} else {
			setFilteredResults(items);
		}
	};
	return (
		<SafeAreaView>
			<ScrollView>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "#000",
					}}
				>
					<RBSheet
						ref={refRBSheet}
						closeOnDragDown={true}
						closeOnPressMask={false}
						height={650}
						customStyles={{
							wrapper: {
								backgroundColor: "#0A070835",
							},
							draggableIcon: {
								backgroundColor: "#000",
							},
						}}
					>
						<View
							style={{
								alignItems: "center",
							}}
						>
							<Text
								style={{
									fontFamily: "PoppinsSemiBold",
									fontSize: 16,
									marginVertical: 10,
									// marginLeft: 10,

									color: "#605979",
								}}
							>
								Assign order to delivery man
							</Text>
						</View>
						<View style={dashboard.seacrchGroup}>
							<View style={dashboard.group}>
								<TouchableOpacity
									style={styles.back}
									onPress={() => navigation.navigate("dashboards")}
								></TouchableOpacity>
								<View style={styles.sectionStyle}>
									<TextInput
										style={{
											color: "#000000",
											width: "90%",
											// borderWidth: 1,
											padding: 10,
											backgroundColor: "#F1F1F1",
											borderRadius: 5,
										}}
										autoCapitalize="none"
										autoCorrect={false}
										clearButtonMode="always"
										defaultValue={searchInput}
										onChangeText={(searchInput) => searchItems(searchInput)}
										type="text"
										placeholder="Search"
									/>
									<MaterialCommunityIcons
										name="magnify"
										size={30}
										color="#0468BF"
									/>
								</View>
							</View>
						</View>
						<View
							style={{
								borderTop: 1,

								// width: 440,
								// marginHorizontal: 20,
								borderWidth: 1,
								borderColor: "#F1F1F1",
							}}
						></View>

						<TouchableOpacity
							onPress={() => {
								navigation.navigate("asignrider");
								refRBSheet.current.close();
							}}
							style={{
								backgroundColor: "#F1F1F1",
								display: "//grid//",
								flexDirection: "row",
								padding: 20,
								justifyContent: "space-between",
								borderRadius: 10,
								marginHorizontal: 20,
								marginVertical: 20,
							}}
						>
							<View>
								<ImageTracker />
							</View>
							<View>
								<Text
									style={{
										fontFamily: "Poppins",
										// textAlign: "center",
										fontSize: "15",
										color: "#605979",
									}}
								>
									5 Minutes away
								</Text>
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
									<View>
										<Ionicons
											name="ios-location-outline"
											size={24}
											color="#605979"
										/>
									</View>

									<Text
										style={{
											fontFamily: "Poppins",
											// textAlign: "center",
											fontSize: 15,
											color: "#605979",
											// marginHorizontal:5
										}}
									>
										No 6 Bola Adewummi
									</Text>
								</View>
								<Text
									style={{
										fontFamily: "Poppins",
										// textAlign: "center",
										fontSize: "15",
										color: "#605979",
									}}
								>
									+234-5478564
								</Text>
							</View>
							<TouchableOpacity onPress={() => refRBSheet.current.open()}>
								<Image
									style={{}}
									source={require("../assets/calltracker.png")}
								/>
							</TouchableOpacity>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("asignrider");
								refRBSheet.current.close();
							}}
							style={{
								backgroundColor: "#F1F1F1",
								display: "//grid//",
								flexDirection: "row",
								padding: 20,
								justifyContent: "space-between",
								borderRadius: 10,
								marginHorizontal: 20,
								marginVertical: 20,
							}}
						>
							<View>
								<ImageTracker />
							</View>
							<View>
								<Text
									style={{
										fontFamily: "Poppins",
										// textAlign: "center",
										fontSize: "15",
										color: "#605979",
									}}
								>
									5 Minutes away
								</Text>
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
									<View>
										<Ionicons
											name="ios-location-outline"
											size={24}
											color="#605979"
										/>
									</View>

									<Text
										style={{
											fontFamily: "Poppins",
											// textAlign: "center",
											fontSize: 15,
											color: "#605979",
											// marginHorizontal:5
										}}
									>
										No 6 Bola Adewummi
									</Text>
								</View>
								<Text
									style={{
										fontFamily: "Poppins",
										// textAlign: "center",
										fontSize: "15",
										color: "#605979",
									}}
								>
									+234-5478564
								</Text>
							</View>
							<TouchableOpacity onPress={() => refRBSheet.current.open()}>
								<Image
									style={{}}
									source={require("../assets/calltracker.png")}
								/>
							</TouchableOpacity>
						</TouchableOpacity>
					</RBSheet>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	sectionStyle: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#F1F1F1",
		borderWidth: 0,
		borderColor: "#000",
		height: 40,
		borderRadius: 5,
		flexDirection: "row-reverse",
		margin: 10,
	},
	back: {
		marginTop: 17,
		marginRight: 10,
	},
});
