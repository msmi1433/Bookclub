import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import React from "react";
import { getUser } from "../gettingData";
import Username from "../components/profilePage/username-card";
import ProfileContainer from "../components/profilePage/profileBio";


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
        <Username key={user} user={user} />
        <ProfileContainer key={user} user={user}/>
      </View>
    );
  }
};

export default Profile;