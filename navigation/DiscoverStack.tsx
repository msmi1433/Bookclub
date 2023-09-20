import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateABookClub from "../screens/CreateABookClub";
import Discover from "../screens/Discover";
import FindABookClub from "../screens/FindABookClub";

const Stack = createNativeStackNavigator();

const DiscoverStack = () => {
  return (
    <Stack.Navigator   screenOptions={{
        headerTitle: "Book Club",
        headerStyle: {
          backgroundColor: "darkblue",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Create a book club" component={CreateABookClub} />
      <Stack.Screen name="Find a book club" component={FindABookClub} />
    </Stack.Navigator>
  );
};

export default DiscoverStack;
