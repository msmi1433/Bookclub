import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverStack from "./DiscoverStack";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";

import CreateProfile from "../screens/CreateProfile";
import SignupScreen from "../screens/SignupScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Discover" component={DiscoverStack} />
        <Tab.Screen name="Create Profile" component={CreateProfile} />
        <Tab.Screen  name="Profile" component={ProfileStack} />
        <Tab.Screen  name="SignUp" component={SignupScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
