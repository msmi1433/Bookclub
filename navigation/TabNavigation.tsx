import { StyleSheet, Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DiscoverStack from "./DiscoverStack";
import HomeStack from "./HomeStack"


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
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
          name="Homes"
          component={HomeStack}
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
          name="Disco"
          component={DiscoverStack}
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
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
