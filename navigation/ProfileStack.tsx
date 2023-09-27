import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilePage from "../screens/ProfilePage";
import React from "react";
import { UserProvider } from "../usercontext";
import UpdateProfile from "../screens/UpdateProfile";
import DesertIslandBookSelect from "../screens/DesertIslandBookSelect";
import BookSearch from "../components/BookSearch";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <UserProvider>
      <Stack.Navigator
        screenOptions={{
          headerTitle:  () => <Header></Header> ,
        headerStyle: {
          backgroundColor: "#424B54"
        },
        headerTitleAlign:"center",
        }}
      >
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
        <Stack.Screen
          name="Desert Island Book Selection"
          component={DesertIslandBookSelect}
        />
      </Stack.Navigator>
    </UserProvider>
  );
};

export default ProfileStack;
