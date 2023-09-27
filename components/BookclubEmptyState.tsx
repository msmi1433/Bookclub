import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { styles } from '../stylesheet'

const BookclubEmptyState = () => {
  return (
    <View style={styles.currentBookContainer}>
      <Text style={styles.currentBookText}>We're in-between books right now...</Text>
      <Icon name="open-book" size={100} color="grey" style={styles.openBook}/>
    </View>
  )
}

export default BookclubEmptyState