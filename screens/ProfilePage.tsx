import { View, Text, ScrollView, Button, Pressable } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { getUser } from "../gettingData";
import Username from "../components/profilePage/username-card";
import ProfileContainer from "../components/profilePage/profileBio";
import FavouriteBookContainer from "../components/profilePage/FavoriteBookContainer";
import { useContext } from "react";
import { UserContext } from "../usercontext";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "../stylesheet";

const Profile: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { uid } = useContext(UserContext);
  const [user, setUser] = useState();
  useFocusEffect(
    React.useCallback(() => {
      getUser(uid, setUser);
    }, [uid])
  );

  if (user) {
    return (
      <ScrollView>
      <View
        style={styles.profilePage}>
        <Username key="user" user={user} />
        <ProfileContainer key="profile" user={user}/>
        <FavouriteBookContainer user={user}/>
        <Pressable style={styles.button} onPress={() => navigation.navigate('UpdateProfile')}>
        <Text>Update your profile</Text>
        </Pressable>
      </View>
      </ScrollView>
    );
  }
};

export default Profile;
