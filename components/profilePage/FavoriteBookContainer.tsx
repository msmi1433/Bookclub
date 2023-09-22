import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { getUserFaveBooks, getUser } from "../../gettingData";
import FavouriteBookCard from "./FavouriteBookCard";
import { useContext } from "react";
import { UserContext } from "../../usercontext";

const FavouriteBookContainer: React.FC<{}> = ({}) => {
  const { uid } = useContext(UserContext);
  const [faveBooks, setFaveBooks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    getUserFaveBooks("users", uid, setFaveBooks);
    getUser(uid, setUser);
  }, []);

  return (
    <View
      style={{
        flexDirection: "column",
        borderWidth: 5,
        flex: 1,
      }}
    >
      <Text>{user.user_username}'s Top 3 Desert Island Books!</Text>
      {faveBooks.map((favebook) => {
        return <FavouriteBookCard key={favebook} userFaveBooks={favebook} />;
      })}
    </View>
  );
};

export default FavouriteBookContainer;
