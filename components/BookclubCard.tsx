import { View, Text } from 'react-native'
import React from 'react'

const BookclubCard: React.FC<{bookclubName: string}> = ({bookclubName}) => {
  return (
    <View style={{
        borderWidth: 5,
        borderBlockColor: 'blue',
        flex: 0.2,
        alignItems: 'center', 
        justifyContent: 'center'
    }}>
      <Text>{bookclubName}</Text>
    </View>
  )
}

export default BookclubCard