import { View, Text } from 'react-native'
import React from 'react'

const Username: React.FC<{user:{user_username: string}}> = ({user})=> {
  return (
    <View style={{
        borderWidth: 5,
        borderBlockColor: 'blue',
        flex: 0.2,
        alignItems: 'center', 
        justifyContent: 'center'
    }}>
      <Text>{user.user_username}</Text>
    </View>
  )
}

export default Username;