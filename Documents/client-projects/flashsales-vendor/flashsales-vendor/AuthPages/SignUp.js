import { Text, View } from "react-native"
import SelectDropdown from "react-native-select-dropdown"
import Input from "../../components/Input"
import styles from "./Auth.style"
import Button from "../../components/Button"
import { Image } from "react-native"
import Layout from "../../components/Layout"

export default function SignUp({ navigation }) {
	const countries = ["+234", "+234", "+234", "+234"]
	return (
		<Layout>
			<Text style={styles.titleText}>Get Started...</Text>
			<View style={styles.inputContainer}>
				<Input keyboardType={"email-address"} placeholder={"Email"} />
				<Input placeholder={"Username"} />
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
							<Input keyboardType={"phone-pad"} placeholder={"Phone Number"} />
						</View>
					</View>
				</View>
				<SelectDropdown
					buttonStyle={{
						borderRadius: 4,
						width: "100%",
						display: "flex",
						height: 42,
					}}
					renderDropdownIcon={function () {
						return <Image source={require("../../assets/dropdownIco.png")} />
					}}
					renderCustomizedButtonChild={function () {
						return <Text>Select State</Text>
					}}
					// defaultValue={"+234"}
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

				<Input secureTextEntry={true} placeholder={"Password"} />
				<Text style={{ color: "#626262", fontWeight: 500, fontSize: 14 }}>
					A 4 digit code will be sent to this number.
				</Text>
			</View>
			{/* <TouchableOpacity
				onPress={() => navigation.navigate("CreatePin")}
				style={styles.button}>
				<Text style={styles.buttonText}>Create Account</Text>
			</TouchableOpacity> */}
			<Button
				title={"Create Account"}
				onPress={() => navigation.navigate("CreatePin")}
			/>
		</Layout>
	)
}

function DropdownIco() {
	return <Text>+234</Text>
}
