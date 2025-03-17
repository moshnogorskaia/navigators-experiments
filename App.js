import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#6a1d75",
					},
					headerTintColor: "white",
					drawerActiveBackgroundColor: "#bc8dce",
					drawerActiveTintColor: "#3e1244",
					drawerStyle: {
						backgroundColor: "#e1dde5",
					},
				}}
			>
				<Drawer.Screen
					name="Welcome"
					component={WelcomeScreen}
					options={{
						drawerLabel: "Welcome Screen",
						drawerIcon: ({ color, size }) => (
							<Ionicons name="home" color={color} size={size} />
						),
					}}
				/>
				<Drawer.Screen
					name="User"
					component={UserScreen}
					options={{
						drawerIcon: ({ color, size }) => (
							<Ionicons name="person" color={color} size={size} />
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
