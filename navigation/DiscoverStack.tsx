import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateABookClub from "../screens/CreateABookClub";
import Discover from "../screens/Discover";

const Stack = createNativeStackNavigator();

const DiscoverStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Create a book club" component={CreateABookClub} />
    </Stack.Navigator>
  );
};

export default DiscoverStack;
