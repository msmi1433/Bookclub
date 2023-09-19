import { View, Text, Button } from 'react-native'
import React from 'react'

const SingleBookClubPage: React.FC<{navigation: any}> = ( {navigation} ) => {
  return (
    <View>
      <Text>SingleBookClubPage</Text>
      <Button
        title="Go To DISCUSSION"
        onPress={() => navigation.navigate("Discussion")}
      />
           <Button
        title="Go To Next Book"
        onPress={() => navigation.navigate("Next Book")}
      />
    </View>
  )
}

export default SingleBookClubPage