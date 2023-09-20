import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CreateProfile from "../screens/CreateProfile";

const Stack = createNativeStackNavigator();

const CreateProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Create Profile",
        headerStyle: {
          backgroundColor: "darkblue",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="Create Profile" component={CreateProfile} />
    </Stack.Navigator>
  );
};

export default CreateProfileStack;
