import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../stylesheet'

const ProfileContainer: React.FC<{user:{user_bio: string }}> = ({user})=> {
  return (
    <View style={styles.profileBio}>
      <Text style={{fontSize:16}}>{user.user_bio}</Text>
    </View>
  )
} 

export default ProfileContainer