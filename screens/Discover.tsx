import { View, Text, Button } from 'react-native'
import React from 'react'


const Discover: React.FC<{navigation: any}> = ( {navigation} ) => {
   console.log(navigation)
  return (
    <View>
      <Text>Discover</Text>
      <Button
        title="Create a Book Club"
        onPress={() => navigation.navigate("Create a book club")}
      />
    </View>
  )
}

export default Discover