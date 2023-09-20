import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePage from '../screens/ProfilePage';
import React from 'react'

const Stack = createNativeStackNavigator();


const ProfileStack = () => {
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
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
      </Stack.Navigator>
    );
  };

export default ProfileStack