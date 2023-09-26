import { View, Text, Button, Image } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import BookclubCard from "../components/BookclubCard";
import { getUserBookclubs, getUser } from "../gettingData";
import { useContext } from "react";
import { UserContext } from "../usercontext";
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

  useEffect(() => {
    getUserBookclubs(uid, setBookClubs);
    getUser(uid, setUser);
  }, [uid]);

  return (
    <View style={styles.bookContainer}>
      <View style={styles.homeUserContainer}>
        <Image
          style={styles.userImage}
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          }}
        />

        <Text style={styles.homeUsername}>
          {user.user_username}'s BookClubs
        </Text>
      </View>

      <Text>{user.user_username}'s BookClubs</Text>

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
