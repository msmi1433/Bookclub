import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { useState } from "react";
import BookclubCard from "../components/BookclubCard";
import { getUserBookclubs, getUser } from "../gettingData";
import { useContext } from "react";
import { UserContext } from "../usercontext";
import { useFocusEffect } from "@react-navigation/native";
import { styles } from "../stylesheet";

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
      getUser(uid, setUser);
      getUserBookclubs(uid, setBookClubs);
    }, [uid])
  );

  return (
    <View style={styles.bookContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.userInfoContainer}>
          <Image
            source={{ uri: user.user_avatar_img }}
            style={styles.userImage}
          />
          <Text style={styles.username}>{user.user_username}'s Bookclubs</Text>
        </View>
        {bookClubs.length ? (
          bookClubs.map((bookclub) => {
            return (
              <BookclubCard
                key={bookclub}
                bookclub_id={bookclub}
                navigation={navigation}
              />
            );
          })
        ) : (
          <View style={styles.joinClubContainer}>
            <Text style={styles.joinClubText}>
              You haven't joined any bookclubs yet!
            </Text>
            <Text style={styles.joinClubText}>
              Visit the discover tab to find or create a club...
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
