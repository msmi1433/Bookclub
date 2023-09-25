import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../stylesheet'

const BookclubCard: React.FC<{bookclubName: string}> = ({bookclubName}) => {
  return (
    <View style={styles.book}>
      <Text style={styles.bookText}>{bookclubName}</Text>
    </View>
  )
}

export default BookclubCard