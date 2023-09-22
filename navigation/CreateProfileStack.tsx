import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import UpdateProfile from "../screens/UpdateProfile";

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
      <Stack.Screen name="Update Profile" component={UpdateProfile} />
    </Stack.Navigator>
  );
};

export default CreateProfileStack;
