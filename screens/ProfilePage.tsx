import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { getUser } from "../gettingData";
import Username from "../components/profilePage/username-card";
import ProfileContainer from "../components/profilePage/profileBio";
import FavouriteBookContainer from "../components/profilePage/FavoriteBookContainer";
import { auth } from "../firebase-config";

const Profile: React.FC<{}> = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUser("users", "vzylI94QHhVBrC3y9uQ1EHUMS8R2", setUser);
  }, []);

  if (user) {
    return (
      <View
        style={{
          flexDirection: "column",
          borderWidth: 5,
          padding: 10,
          flex: 1,
        }}
      >
        <Text>Profile</Text>
        <Username key="user" user={user} />
        <ProfileContainer key="profile" user={user}/>
        <FavouriteBookContainer/>
      </View>
    );
  }
};

export default Profile;
