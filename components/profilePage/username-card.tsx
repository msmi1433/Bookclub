import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../stylesheet'

const Username: React.FC<{user:{user_username: string, user_avatar_img: string}}> = ({user})=> {
  return (
    <View style={styles.username}>
     
      <Text>{user.user_username}</Text>
     
      <Image style={{ width: 90, height: 90, borderRadius:10, borderWidth:2, justifyContent:"flex-start", }} source={{uri: user.user_avatar_img}}/> 
    </View>
  )
}

export default Username;