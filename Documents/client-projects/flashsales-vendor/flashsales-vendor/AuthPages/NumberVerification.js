import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import { SafeAreaView } from "react-native-safe-area-context"
import globals from "../../globals"
import Input from "../../components/Input"
import { TouchableOpacity } from "react-native"
import styles from "./Auth.style"

export default function NumberVerification({ navigation }) {
	const countries = ["+234", "+234", "+234", "+234"]
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				style='inverted'
				animated={true}
				backgroundColor={globals.mainColor}
			/>

			<Text style={styles.titleText}>Phone number verification</Text>

			<View style={styles.inputContainer}>
				<Text style={{ color: "#626262", fontWeight: 500, fontSize: 14 }}>
					We will send a verification code to the number below.
				</Text>
				<View style={styles.phoneContainer}>
					<View style={styles.Number}>
						<SelectDropdown
							buttonStyle={{
								borderRadius: 4,
								width: "15%",
								display: "flex",
								height: 42,
							}}
							// renderDropdownIcon={DropdownIco}
							renderCustomizedButtonChild={DropdownIco}
							defaultValue={"+234"}
							data={countries}
							onSelect={(selectedItem, index) => {
								console.log(selectedItem, index)
							}}
							buttonTextAfterSelection={(selectedItem, index) => {
								// text represented after item is selected
								// if data array is an array of objects then return selectedItem.property to render after item is selected
								return selectedItem
							}}
							rowTextForSelection={(item, index) => {
								// text represented for each item in dropdown
								// if data array is an array of objects then return item.property to represent item in dropdown
								return item
							}}
						/>
						<View style={{ width: "82%", display: "flex" }}>
							<Input placeholder={"Phone Number"} />
						</View>
					</View>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 2,
						marginBottom: 24,
					}}>
					<Text
						style={{
							color: "#626262",
							fontWeight: 500,
							fontSize: 14,
						}}>
						Didn’t recieve the code?
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("CreatePin")}>
						<Text style={{ color: globals.titleTextColor }}>Request again</Text>
					</TouchableOpacity>
				</View>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("UploadFiles")}
				style={styles.button}>
				<Text style={styles.buttonText}>Verify and proceed</Text>
			</TouchableOpacity>
		</SafeAreaView>
	)
}

function DropdownIco() {
	return <Text>+234</Text>
}
