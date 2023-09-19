import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SingleBookClubPage from '../screens/SingleBookClubPage'
import Home from '../screens/Home'
import Discussion from '../screens/Discussion'
import NextBook from '../screens/NextBook'
import React from 'react'

const Stack = createNativeStackNavigator()

const StackBookClubs = () => {
  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="SingleBookClubPage" component={SingleBookClubPage} />
    <Stack.Screen name="Discussion" component={Discussion} />
    <Stack.Screen name="Next Book" component={NextBook} />
  </Stack.Navigator>
  )
}

export default StackBookClubs