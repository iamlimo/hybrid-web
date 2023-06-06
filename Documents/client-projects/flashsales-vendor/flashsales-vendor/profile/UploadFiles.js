/** @format */

import React, { useState } from "react";
import { Text } from "react-native";
import Layout from "../components/Layout";
import styles from "../AuthPages/Auth.style";
import Input from "../components/Input";
import { TouchableOpacity } from "react-native";
import { View } from "react-native";
import DocPicker from "../components/DocumentPicker";
import { ScrollView } from "react-native";
import globals from "../globals";
import { Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import stylesauth from "../AuthPages/Auth.style";

function UploadFiles({ navigation }) {
	const [selectedFile, setSelectedFile] = useState(null);

	return (
		<Layout>
			<View style={{  marginHorizontal:20}}>
			<Text style={styles.titleText}>Upload files</Text>

			<View>
				<Text
					style={{
						color: "#605979",
						marginBottom: 14,
						fontWeight: 500,
						fontSize: 16,
					}}
				>
					Kindly upload the following files
				</Text>
				<Text
					style={{
						color: "#605979",
						fontWeight: 500,
						fontSize: 14,
					}}
				>
					Document uploaded must be in PDF format and not more than 4MB in size
				</Text>
			</View>
			<ScrollView>
				<View style={{ marginBottom: 20, gap: 18 }}>
					<DocPicker title={"National Id"} />
					<DocPicker title={"Tax Clearance"} />
					<DocPicker title={"Coporate affairs commision (CAC)"} />
				</View>

				<View style={styles.VehicleUploadGroup}>
					<Text
						style={{
							color: globals.mainColor,
							fontSize: 15,
							fontWeight: 500,
						}}
					>
						Upload Vehicle Photo
					</Text>
					<View style={styles.VehicleUploadPreview}>
						<UploadCar
							selectedFile={selectedFile}
							setSelectedFile={setSelectedFile}
						/>
					</View>
					<TouchableOpacity
						onPress={() => navigation.navigate("AddCard")}
						style={{
							backgroundColor: "#D0C8E8",
							paddingHorizontal: 14,
							paddingVertical: 14,
							height: 49,
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 6,
							marginTop: 15,
						}}
					>
						<Text
							style={{
								color: "#ffffff",
								fontWeight: 500,
							}}
						>
							Upload Now
						</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity
					onPress={() => navigation.navigate("locations")}
					style={styles.button}
				>
					<Text style={styles.buttonText}>Submit files</Text>
				</TouchableOpacity>
			</ScrollView>
			</View>
		</Layout>
	);
}

export default UploadFiles;

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
					<Text style={{ color: "#0468BF", paddingTop: 8, fontWeight: 500 }}>
						Browse photo
					</Text>
				</TouchableOpacity>
			)}
		</>
	);
}
