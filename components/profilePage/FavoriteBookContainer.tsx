import { View, Text,ScrollView } from "react-native";
import React from "react";
import FavouriteBookCard from "./FavouriteBookCard";
import { styles } from "../../stylesheet";


interface FaveBookObj {
  book_title: string;
  book_author: string;
  book_img: string;
}

const FavouriteBookContainer: React.FC<{
  user: { user_username: string; user_fave_books: FaveBookObj[] };
}> = ({ user }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}> 
    <View style={styles.favouriteBookContainer}
    >
      <Text style={{fontSize:20}}>My Top 3 Desert Island Books!</Text>
      {user.user_fave_books.map((favebook) => {
        return (
          <FavouriteBookCard
            key={favebook.book_title}
            userFaveBooks={favebook}
          />
        );
      })}
    </View>
    </ScrollView>
  );
};

export default FavouriteBookContainer;
