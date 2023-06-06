/** @format */

import React, { useEffect, useRef, useState } from "react";
import {
	View,
	ScrollView,
	Text,
	TextInput,
	Button,
	TouchableOpacity,
	SafeAreaView,
	Image,
} from "react-native";
import {
	Ionicons,
	MaterialCommunityIcons,
	AntDesign,
	MaterialIcons,
} from "@expo/vector-icons";
import Layout from "../components/Layout";
// import { dashboard } from "../dashboard/dashboardStyle";
import styles from "../AuthPages/Auth.style";
import { profile } from "./profilestyle";
import { stylesSign } from "./signStyle";
// import { adress } from "../dashboard/adressstyle";
import globals from "../globals";
import UploadImage from "./UploadImage";
export default function ProfileInformation({ navigation }) {
	const [username, setUsername] = useState("");
	const [names, setNames] = useState("");
	const [phone, setPhone] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);
	return (
		<Layout>
			<View style={{ marginHorizontal: 20 }}>
				<View
					style={{
						display: "//grid//",
						flexDirection: "row",
						// marginHorizontal: 20,
					}}
				>
					<TouchableOpacity
						style={{ marginTop: 7, marginRight: 10 }}
						onPress={() => navigation.navigate("uploadfiles")}
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
							Profile Information
						</Text>
					</View>
				</View>

				<View style={styles.VehicleUploadGroup2}>
					<Text
						style={{
							color: globals.mainColor,
							fontSize: 15,
							fontWeight: 500,
						}}
					>
						Upload Vehicle Photo
					</Text>
					<View style={styles.VehicleUploadPreview2}>
						<UploadCar
							selectedFile={selectedFile}
							setSelectedFile={setSelectedFile}
						/>
					</View>
					<View
						style={{
							alignItems: "center",
							justifyContent: "center",
							display: "flex",
							marginTop: -40,
						}}
					>
						<UploadImage />
					</View>
				</View>

				<View
					style={{
						marginTop: 40,
					}}
				>
					<TouchableOpacity
						style={profile.groupdescription2}
						onPress={() => navigation.navigate("profileinformation")}
					>
						<View style={profile.grouptwo}>
							<Text
								style={{
									fontFamily: "Poppins",
									marginHorizontal: 15,
									fontSize: 14,
									/* Flash Serve Grey/75% */

									color: "#605979",
								}}
							>
								Personal Details
							</Text>
						</View>
					</TouchableOpacity>
					<View
						style={{
							borderTop: 1,

							// width: 440,
							marginHorizontal: 20,
							borderWidth: 1,
							borderColor: "#F1F1F1",
						}}
					></View>
					<View>
						<TextInput
							style={stylesSign.inputprofile}
							onChangeText={(name) => setNames(name)}
							placeholder="Name"
							defaultValue={names}
							keyboardType="name"
						/>
					</View>
					<View>
						<TextInput
							style={stylesSign.inputprofile}
							onChangeText={(phone) => setPhone(phone)}
							placeholder="Phone Number"
							defaultValue={phone}
							keyboardType="numeric"
						/>
					</View>
					<View>
						<TextInput
							style={stylesSign.inputprofile}
							onChangeText={(username) => setUsername(username)}
							placeholder="Username"
							defaultValue={username}
							keyboardType="email"
						/>
					</View>
					<View>
						<TextInput
							style={stylesSign.inputprofile}
							onChangeText={(username) => setUsername(username)}
							placeholder="Username"
							defaultValue={username}
							keyboardType="email"
						/>
					</View>
					<View
						style={{
							backgroundColor: "#F1F1F1",
							// borderBottomColor: '#000000',
							// borderBottomWidth: 1,
							marginHorizontal: 10,
							borderRadius: 10,
						}}
					>
						<TextInput
							onChangeText={(username) => setUsername(username)}
							editable
							multiline
							numberOfLines={10}
							maxLength={100}
							placeholder="Business description"
							defaultValue={username}
							keyboardType="email"
							style={{
								alignSelf: "stretch",
								height: 150,
								fontFamily: "Poppins",
								fontSize: 15,
								// marginVertical: 55,
								margin: 15,
								borderRadius: 5,
								padding: 10,
								border: "none",
								backgroundColor: "#F1F1F1",
								color: "#605979",
							}}
						/>
					</View>
				</View>

				<TouchableOpacity
					onPress={() => navigation.navigate("home")}
					style={stylesSign.buttonprofile}
				>
					{/* <Button color="#ffffff" title="Next" /> */}
					<Text
						style={{
							color: "#ffffff",
							padding: 10,
							textAlign: "center",
							fontSize: 18,
						}}
					>
						Next
					</Text>
				</TouchableOpacity>
			</View>
		</Layout>
	);
}
function UploadCar({ setSelectedFile, selectedFile }) {
	async function getFile() {
		const file = await DocumentPicker.getDocumentAsync();
		if (file.type === "success") setSelectedFile(file);
		if (file.type === "cancel") console.log("Cancled");
		console.log(file.uri);
	}
	return (
		<>
			{selectedFile ? (
				<TouchableOpacity onPress={() => getFile()}>
					<Image
						style={{ width: "100%", height: "100%", borderRadius: 10.41 }}
						source={{ uri: selectedFile.uri }}
					/>
				</TouchableOpacity>
			) : (
				<TouchableOpacity
					onPress={() => getFile()}
					style={{
						width: "100%",
						height: "100%",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image source={require("../assets/FileIco.png")} />
					<Text style={{ color: "#ffffff", paddingTop: 8, fontWeight: 500 }}>
						Browse photo
					</Text>
				</TouchableOpacity>
			)}
		</>
	);
}
