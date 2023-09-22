import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import UpdateProfile from "../screens/UpdateProfile";

import CreateProfile from "../screens/CreateProfile";
import { UserProvider } from "../usercontext";


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

    <UserProvider>
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
    </UserProvider>

  );
};

export default CreateProfileStack;
