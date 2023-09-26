import { View, Text, Button, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import BookclubCard from "../components/BookclubCard";
import { getUserBookclubs, getUser } from "../gettingData";
import { useContext } from "react";
import { UserContext } from "../usercontext";
import { useFocusEffect } from "@react-navigation/native";

interface NavProps {
  navigation: any;
}

const Home: React.FC<NavProps> = ({ navigation }) => {
  const [bookClubs, setBookClubs] = useState([]);
  const { uid } = useContext(UserContext);
  const [user, setUser] = useState({
    user_username: "",
    user_avatar_img: "",
    user_bio: "",
    user_fave_books: [
      {
        book_author: "",
        book_title: "",
        book_img: "",
      },
    ],
  });

  useFocusEffect(
    React.useCallback(() => {
    getUserBookclubs(uid, setBookClubs);
    getUser(uid, setUser);
  }, [uid]));

  return (
    <View style={styles.bookContainer}>
      <Image source={{ uri: user.user_avatar_img }} style={styles.userImage} />
      <Text style={styles.username}>{user.user_username}'s BookClubs</Text>
      <Text style={styles.userBio}>{user.user_bio}</Text>

      {bookClubs.map((bookclub) => {
        return (
          <BookclubCard
            key={bookclub}
            bookclub_id={bookclub}
            navigation={navigation}
          />
        );
      })}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bookContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 75,
    marginBottom: 16,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  userBio: {
    fontSize: 18,
    maxWidth: 300,
  },
});
