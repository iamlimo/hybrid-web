/** @format */

import React, { useMemo, useState, useRef } from "react";
import {
	View,
	Button,
	Text,
	TouchableOpacity,
	SafeAreaView,
	StyleSheet,
	ScrollView,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
// import { adress } from "../dashboard/adressstyle";
import RadioButtonRN from "radio-buttons-react-native";
export default function Sort({ navigation, refRBSheet }) {
	const data = [
		{
			label: "Popular Products",
		},
		{
			label: "Relevance",
		},
		{
			label: "Whats New",
		},
		{
			label: "Price-low to High",
		},
		{
			label: "Price-high to Low",
		},
		{
			label: "On-Sale",
		},
	];

	// const [selectedId, setSelectedId] = useState();
	return (
		<SafeAreaView>
			<ScrollView>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						color: "#000",
					}}
				>
					<RBSheet
						ref={refRBSheet}
						closeOnDragDown={true}
						closeOnPressMask={false}
						height={350}
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
								display: "grid",
								flexDirection: "row",
								justifyContent: "space-between",
								marginHorizontal: 20,
								padding: 5,
							}}
						>
							<View>
								<Text
									style={{
										fontFamily: "PoppinsSemiBold",
										fontSize: 14,

										marginLeft: 10,

										color: "#605979",
									}}
								>
									Sort By
								</Text>
							</View>
						</View>

						<RadioButtonRN
							data={data}
							selectedBtn={(e) => console.log(e)}
							boxStyle={{
								marginBottom: -20,
								borderWidth: 0,
							}}
							circleSize={10}
						/>
					</RBSheet>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
