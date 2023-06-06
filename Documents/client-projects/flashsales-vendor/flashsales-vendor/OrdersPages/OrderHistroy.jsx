/** @format */

import React, { useState, useRef } from "react";
import {
	View,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	Button,
} from "react-native";
import {
	FontAwesome,
	MaterialCommunityIcons,
	MaterialIcons,
	Ionicons,
} from "@expo/vector-icons";
import { profile } from "./profilestyle";
import Sort from "./Sort";
import { Dropdown } from "react-native-element-dropdown";

const data = [
	{ value: 1 },
	{ value: 2 },
	{ value: 3 },
	{ value: 4 },
	{ value: 5 },
	{ value: 6 },
	{ value: 7 },
	{ value: 8 },
];
export default function OrderHistroy({ navigation }) {
	const [selectone, setSelectOne] = useState(1);
	const [description, setDescription] = useState(false);
	const [payment, setPayment] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const [value, setValue] = useState(null);
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
	const desc = () => {
		setDescription(!description);
	};
	const activeone = () => {
		setSelectOne(1);
		console.log("hello 1");
	};
	const activetwo = () => {
		setSelectOne(2);
		console.log("hello 2");
	};
	const activethree = () => {
		setSelectOne(3);
		console.log("hello ");
	};

	const payments = () => {
		setPayment(!payment);
	};
	const refRBSheet = useRef();
	// const [checkedId, setcheckedId] = useState("");
	return (
		<SafeAreaView style={{ backgroundColor: "#ffffff" }}>
			<ScrollView
				showsVerticalScrollIndicator={false}
				showsHorizontalScrollIndicator={false}
				style={{
					backgroundColor: "#ffffff",
					height: "100%",
					// marginHorizontal: 20,
				}}
			>
				<View
					style={{
						backgroundColor: "#ffffff",
						// height: "100%",
						marginHorizontal: 20,
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<View style={{ flexDirection: "row" }}>
							<TouchableOpacity
								style={{
									marginTop: 10,
								}}
								onPress={() => navigation.navigate("homes")}
							>
								<Ionicons name="chevron-back" size={24} color="black" />
							</TouchableOpacity>
							<View>
								<Text
									style={{
										fontFamily: "PoppinsSemiBold",
										fontSize: 20,
										color: "#0468BF",
										marginTop: 10,
										marginBottom: 10,
										marginLeft: 20,
									}}
								>
									Orders
								</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity
						onPress={() => refRBSheet.current.open()}
						style={{
							flexDirection: "row",
							marginHorizontal: 30,
							marginVertical: 20,
						}}
					>
						<MaterialIcons name="sort" size={24} color="black" />
						<Text
							style={{
								fontFamily: "Poppins",
								fontSize: 16,
								marginLeft: 10,
								color: "#13101E",
							}}
						>
							Sort
						</Text>
					</TouchableOpacity>
					<Sort refRBSheet={refRBSheet} navigation={navigation} />
					<View style={{ flexDirection: "row" }}>
						<TouchableOpacity
							style={styles.back}
							onPress={() => navigation.navigate("dashboards")}
						></TouchableOpacity>
						<View style={styles.sectionStyle}>
							<TextInput
								style={{
									color: "#000000",
									width: "100%",
									marginVertical: 20,
									padding: 10,
									// backgroundColor: "#F1F1F1",
									borderRadius: 10,
								}}
								autoCapitalize="none"
								autoCorrect={false}
								clearButtonMode="always"
								defaultValue={searchInput}
								onChangeText={(searchInput) => searchItems(searchInput)}
								type="text"
								placeholder="Search by order parameter..."
							/>
							<MaterialCommunityIcons
								name="magnify"
								size={30}
								color="#0468BF"
								style={{ marginLeft: "10%" }}
							/>
						</View>
					</View>

					<View
						style={{
							borderRadius: 10,
							flexDirection: "row",
							marginTop: 10,
							backgroundColor: "#F1F1F1",
							padding: 3,
						}}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("");
								activeone();
							}}
							style={
								selectone === 1
									? profile.buttonreviewcart22
									: profile.buttonreviewcart222
							}
						>
							<Text
								style={
									selectone === 1 ? profile.textactive : profile.textnotactive
								}
							>
								All Orders
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("");
								activetwo();
							}}
							style={
								selectone === 2
									? profile.buttonreviewcart22
									: profile.buttonreviewcart222
							}
						>
							<Text
								style={
									selectone === 2 ? profile.textactive : profile.textnotactive
								}
							>
								Active Orders
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate("");
								activethree();
							}}
							style={
								selectone === 3
									? profile.buttonreviewcart22
									: profile.buttonreviewcart222
							}
						>
							<Text
								style={
									selectone === 3 ? profile.textactive : profile.textnotactive
								}
							>
								Completed
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				{selectone === 1 ? (
					<View>
						<View
							style={{
								borderTop: 1,

								marginTop: 10,
								// width: "100%",
								// marginHorizontal: 20,
								borderWidth: 4,
								borderColor: "#F1F1F1",
							}}
						></View>
						<View style={{ marginHorizontal: 20 }}>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,

									justifyContent: "space-between",
								}}
							>
								<View>
									<Text>45-Nov-6890, 16:00 am</Text>
								</View>
								<View>
									<Text>Douglas Stan</Text>
								</View>
							</View>

							<View
								style={{
									borderTop: 1,

									marginTop: 10,

									borderWidth: 1,
									borderColor: "#F1F1F1",
								}}
							></View>

							<View style={{ marginVertical: 20 }}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
									}}
								>
									<View style={{ flexDirection: "row" }}>
										<Ionicons name="person-outline" size={24} color="black" />
										<Text
											style={{
												fontFamily: "Poppins",

												fontSize: 14,
												marginLeft: 10,
												/* Flash Serve Grey/75% */

												color: "#605979",
											}}
										>
											#EERY57578T
										</Text>
									</View>
									<View
										style={{
											backgroundColor: "#FDE2D0",

											fontFamily: "Poppins",

											fontSize: 12,
											borderRadius: 10,
											paddingHorizontal: 15,
										}}
									>
										<Button
											title="Cancelled"
											color="#DB271A"
											style={{
												fontFamily: "Poppins",

												fontSize: 12,
											}}
										/>
									</View>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 12,
										}}
									>
										23-Nov-2034
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 20,
									backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Customer
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Kelvin Henry
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									// backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Product
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Corn
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Price
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										$450
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									// backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Delivery Status
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Cancelled
									</Text>
								</View>
							</View>
						</View>
						<View>
							<View
								style={{
									borderTop: 1,

									marginTop: 10,
									// width: "100%",
									// marginHorizontal: 20,
									borderWidth: 4,
									borderColor: "#F1F1F1",
								}}
							></View>
							<View style={{ marginHorizontal: 20 }}>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,

										justifyContent: "space-between",
									}}
								>
									<View>
										<Text>45-Nov-6890, 16:00 am</Text>
									</View>
									<View>
										<Text>Douglas Stan</Text>
									</View>
								</View>

								<View
									style={{
										borderTop: 1,

										marginTop: 10,

										borderWidth: 1,
										borderColor: "#F1F1F1",
									}}
								></View>

								<View style={{ marginVertical: 20 }}>
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
										}}
									>
										<View style={{ flexDirection: "row" }}>
											<Ionicons name="person-outline" size={24} color="black" />
											<Text
												style={{
													fontFamily: "Poppins",

													fontSize: 14,
													marginLeft: 10,
													/* Flash Serve Grey/75% */

													color: "#605979",
												}}
											>
												#EERY57578T
											</Text>
										</View>
										<View
											style={{
												backgroundColor: "#FEF4CB",

												fontFamily: "Poppins",

												fontSize: 12,
												borderRadius: 10,
												paddingHorizontal: 15,
											}}
										>
											<Button
												onPress={() => navigation.navigate("activeorder")}
												title="Pick up"
												color="#FCA800"
												style={{
													fontFamily: "Poppins",

													fontSize: 12,
												}}
											/>
										</View>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 12,
											}}
										>
											23-Nov-2034
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,
										padding: 20,
										backgroundColor: "#F1F1F1",
										justifyContent: "space-between",
									}}
								>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 15,
											}}
										>
											Customer
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "PoppinsBold",

												fontSize: 15,
											}}
										>
											Kelvin Henry
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,
										padding: 15,
										// backgroundColor: "#F1F1F1",
										justifyContent: "space-between",
									}}
								>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 15,
											}}
										>
											Product
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "PoppinsBold",

												fontSize: 15,
											}}
										>
											Corn
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,
										padding: 15,
										backgroundColor: "#F1F1F1",
										justifyContent: "space-between",
									}}
								>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 15,
											}}
										>
											Price
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "PoppinsBold",

												fontSize: 15,
											}}
										>
											$450
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,
										padding: 15,
										// backgroundColor: "#F1F1F1",
										justifyContent: "space-between",
									}}
								>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 15,
											}}
										>
											Delivery Status
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "PoppinsBold",

												fontSize: 15,
											}}
										>
											Ready for Pickup
										</Text>
									</View>
								</View>
							</View>
						</View>
						<View>
							<View
								style={{
									borderTop: 1,

									marginTop: 10,
									// width: "100%",
									// marginHorizontal: 20,
									borderWidth: 4,
									borderColor: "#F1F1F1",
								}}
							></View>
							<View style={{ marginHorizontal: 20 }}>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,

										justifyContent: "space-between",
									}}
								>
									<View>
										<Text>45-Nov-6890, 16:00 am</Text>
									</View>
									<View>
										<Text>Douglas Stan</Text>
									</View>
								</View>

								<View
									style={{
										borderTop: 1,

										marginTop: 10,

										borderWidth: 1,
										borderColor: "#F1F1F1",
									}}
								></View>

								<View style={{ marginVertical: 20 }}>
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
										}}
									>
										<View style={{ flexDirection: "row" }}>
											<Ionicons name="person-outline" size={24} color="black" />
											<Text
												style={{
													fontFamily: "Poppins",

													fontSize: 14,
													marginLeft: 10,
													/* Flash Serve Grey/75% */

													color: "#605979",
												}}
											>
												#EERY57578T
											</Text>
										</View>
										<View
											style={{
												backgroundColor: "#E4FAD3",

												fontFamily: "Poppins",

												fontSize: 12,
												borderRadius: 10,
												paddingHorizontal: 15,
											}}
										>
											<Button
												title="Completed"
												color="#36A825"
												style={{
													fontFamily: "Poppins",

													fontSize: 12,
												}}
											/>
										</View>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 12,
											}}
										>
											23-Nov-2034
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,
										padding: 20,
										backgroundColor: "#F1F1F1",
										justifyContent: "space-between",
									}}
								>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 15,
											}}
										>
											Customer
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "PoppinsBold",

												fontSize: 15,
											}}
										>
											Kelvin Henry
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,
										padding: 15,
										// backgroundColor: "#F1F1F1",
										justifyContent: "space-between",
									}}
								>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 15,
											}}
										>
											Product
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "PoppinsBold",

												fontSize: 15,
											}}
										>
											Corn
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,
										padding: 15,
										backgroundColor: "#F1F1F1",
										justifyContent: "space-between",
									}}
								>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 15,
											}}
										>
											Price
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "PoppinsBold",

												fontSize: 15,
											}}
										>
											$450
										</Text>
									</View>
								</View>
								<View
									style={{
										flexDirection: "row",
										marginTop: 10,
										padding: 15,
										// backgroundColor: "#F1F1F1",
										justifyContent: "space-between",
									}}
								>
									<View>
										<Text
											style={{
												fontFamily: "Poppins",
												color: "#605979",
												fontSize: 15,
											}}
										>
											Delivery Status
										</Text>
									</View>
									<View>
										<Text
											style={{
												fontFamily: "PoppinsBold",

												fontSize: 15,
											}}
										>
											Completed
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
				) : null}
				{selectone === 2 ? (
					<View>
						<View
							style={{
								borderTop: 1,

								marginTop: 10,
								// width: "100%",
								// marginHorizontal: 20,
								borderWidth: 4,
								borderColor: "#F1F1F1",
							}}
						></View>
						<View style={{ marginHorizontal: 20 }}>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,

									justifyContent: "space-between",
								}}
							>
								<View>
									<Text>45-Nov-6890, 16:00 am</Text>
								</View>
								<View>
									<Text>Douglas Stan</Text>
								</View>
							</View>

							<View
								style={{
									borderTop: 1,

									marginTop: 10,

									borderWidth: 1,
									borderColor: "#F1F1F1",
								}}
							></View>

							<View style={{ marginVertical: 20 }}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
									}}
								>
									<View style={{ flexDirection: "row" }}>
										<Ionicons name="person-outline" size={24} color="black" />
										<Text
											style={{
												fontFamily: "Poppins",

												fontSize: 14,
												marginLeft: 10,
												/* Flash Serve Grey/75% */

												color: "#605979",
											}}
										>
											#EERY57578T
										</Text>
									</View>
									<View
										style={{
											backgroundColor: "#FEF4CB",

											fontFamily: "Poppins",

											fontSize: 12,
											borderRadius: 10,
											paddingHorizontal: 15,
										}}
									>
										<Button
											onPress={() => navigation.navigate("activeorder")}
											title="Pick up"
											color="#FCA800"
											style={{
												fontFamily: "Poppins",

												fontSize: 12,
											}}
										/>
									</View>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 12,
										}}
									>
										23-Nov-2034
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 20,
									backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Customer
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Kelvin Henry
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									// backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Product
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Corn
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Price
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										$450
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									// backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Delivery Status
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Ready for Pickup
									</Text>
								</View>
							</View>
						</View>
					</View>
				) : null}

				{selectone === 3 ? (
					<View>
						<View
							style={{
								borderTop: 1,

								marginTop: 10,
								// width: "100%",
								// marginHorizontal: 20,
								borderWidth: 4,
								borderColor: "#F1F1F1",
							}}
						></View>
						<View style={{ marginHorizontal: 20 }}>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,

									justifyContent: "space-between",
								}}
							>
								<View>
									<Text>45-Nov-6890, 16:00 am</Text>
								</View>
								<View>
									<Text>Douglas Stan</Text>
								</View>
							</View>

							<View
								style={{
									borderTop: 1,

									marginTop: 10,

									borderWidth: 1,
									borderColor: "#F1F1F1",
								}}
							></View>

							<View style={{ marginVertical: 20 }}>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
									}}
								>
									<View style={{ flexDirection: "row" }}>
										<Ionicons name="person-outline" size={24} color="black" />
										<Text
											style={{
												fontFamily: "Poppins",

												fontSize: 14,
												marginLeft: 10,
												/* Flash Serve Grey/75% */

												color: "#605979",
											}}
										>
											#EERY57578T
										</Text>
									</View>
									<View
										style={{
											backgroundColor: "#E4FAD3",

											fontFamily: "Poppins",

											fontSize: 12,
											borderRadius: 10,
											paddingHorizontal: 15,
										}}
									>
										<Button
											title="Completed"
											color="#36A825"
											style={{
												fontFamily: "Poppins",

												fontSize: 12,
											}}
										/>
									</View>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 12,
										}}
									>
										23-Nov-2034
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 20,
									backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Customer
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Kelvin Henry
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									// backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Product
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Corn
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Price
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										$450
									</Text>
								</View>
							</View>
							<View
								style={{
									flexDirection: "row",
									marginTop: 10,
									padding: 15,
									// backgroundColor: "#F1F1F1",
									justifyContent: "space-between",
								}}
							>
								<View>
									<Text
										style={{
											fontFamily: "Poppins",
											color: "#605979",
											fontSize: 15,
										}}
									>
										Delivery Status
									</Text>
								</View>
								<View>
									<Text
										style={{
											fontFamily: "PoppinsBold",

											fontSize: 15,
										}}
									>
										Completed
									</Text>
								</View>
							</View>
						</View>
					</View>
				) : null}
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
		marginVertical: 10,
		width: "100%",
	},
	back: {
		marginTop: 17,
		// marginRight: 10,
	},
	container: {
		backgroundColor: "white",
		paddingLeft: 10,
		width: 100,
		paddingTop: 5,
		marginTop: 17,
	},
	dropdown: {
		fontFamily: "PoppinsBold",
		// height: 24,
		borderColor: "gray",
		// borderWidth: 0.5,
		borderRadius: 8,
		// paddingHorizontal: 8,
		marginTop: -25,
		marginLeft: -10,
	},

	label: {
		fontFamily: "Poppins",
		position: "absolute",
		backgroundColor: "white",
		left: 22,
		top: 8,
		zIndex: 999,
		paddingHorizontal: 8,
		fontSize: 14,
	},
	placeholderStyle: {
		fontSize: 16,
		fontFamily: "Poppins",
	},
	selectedTextStyle: {
		fontSize: 16,
	},

	inputSearchStyle: {
		height: 40,
		fontSize: 19,
		fontFamily: "Poppins",
	},
});
