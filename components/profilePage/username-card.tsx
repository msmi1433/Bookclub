import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../stylesheet'

const Username: React.FC<{
  user: { user_username: string; user_avatar_img: string };
}> = ({ user }) => {
  return (
    <View style={styles.username}>
     
      <Text style={{ fontSize:30, textAlign:"center", margin: 15, paddingBottom:3, borderRadius:8, fontWeight:"700"}}> {user.user_username}'s Profile</Text>
     
      <Image style={{ width: 150, height: 150, borderRadius:10}} source={{uri: user.user_avatar_img}}/> 
    </View>
  );
};

export default Username;
