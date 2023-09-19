import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./screens/Home";
import Discover from "./screens/Discover";
import Profile from "./screens/ProfilePage";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitle: "Book Club",
          headerStyle: {
            backgroundColor: "darkblue",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This will take you to profile")}
                title="Profile pic"
                color="#fff"
              />
            ),
          }}
        />

<Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            headerRight: () => (
              <Button
                onPress={() => alert("This will take you to profile")}
                title="Profile pic"
                color="#fff"
              />
            ),
          }}
        />
<Tab.Screen
          name="Profile"
          component={Profile}
        />


      </Tab.Navigator>
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
