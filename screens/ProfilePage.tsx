import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { getUser } from "../gettingData";
import Username from "../components/profilePage/username-card";
import ProfileContainer from "../components/profilePage/profileBio";
import FavouriteBookContainer from "../components/profilePage/FavoriteBookContainer";


const Profile: React.FC<{}> = () => {
  const [user, setUser] = useState();
  

  useEffect(() => {
    getUser("users", "cCVDQxJNt02pqrDfDubm", setUser);
  }, []);

  if (user) {
    return (
      <View
        style={{
          flexDirection: "column",
          borderWidth: 5,
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