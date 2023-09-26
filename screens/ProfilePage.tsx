import { View, Text, ScrollView, Button } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { getUser } from "../gettingData";
import Username from "../components/profilePage/username-card";
import ProfileContainer from "../components/profilePage/profileBio";
import FavouriteBookContainer from "../components/profilePage/FavoriteBookContainer";
import { useContext } from "react";
import { UserContext } from "../usercontext";
import { styles } from "../stylesheet";

const Profile: React.FC<{navigation: any}> = ({navigation}) => {
  const { uid } = useContext(UserContext);
  const [user, setUser] = useState();
  useEffect(() => {
    getUser(uid, setUser);
  }, [uid]);

  if (user) {
    return (
      <ScrollView>
      <View
        style={styles.profilePage}
      >
        <Username key="user" user={user} />
        <ProfileContainer key="profile" user={user}/>
        <FavouriteBookContainer user={user}/>
        <Button title='Update your profile' onPress={() => navigation.navigate('UpdateProfile')}></Button>
      </View>
      </ScrollView>
    );
  }
};

export default Profile;