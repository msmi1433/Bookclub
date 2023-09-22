import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import React from "react";
import { getUserFaveBooks, getUser } from "../../gettingData";
import FavouriteBookCard from "./FavouriteBookCard";
import { useContext } from "react";
import { UserContext } from "../../usercontext";

interface FaveBookObj {
    book_title: string, 
    book_author: string,
    book_img: string
}

const FavouriteBookContainer: React.FC<{user: {user_username: string, user_fave_books: FaveBookObj[]}}> = ({user}) => {

  return (
    <View
      style={{
        flexDirection: "column",
        borderWidth: 5,
        flex: 1,
      }}
    >
      <Text>{user.user_username}'s Top 3 Desert Island Books!</Text>
      {user.user_fave_books.map((favebook) => {
        return <FavouriteBookCard key={favebook.book_title} userFaveBooks={favebook} />;
      })}
    </View>
  );
};

export default FavouriteBookContainer;
