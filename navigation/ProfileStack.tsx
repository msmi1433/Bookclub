import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../screens/ProfilePage";
import React from "react";
import { UserProvider } from "../usercontext";
import UpdateProfile from "../screens/UpdateProfile";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <UserProvider>
      <Stack.Navigator
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
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name='UpdateProfile' component={UpdateProfile} />
      </Stack.Navigator>
    </UserProvider>
  );
};

export default ProfileStack;
