import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { useState } from "react";
import BookclubCard from "../components/BookclubCard";
import { styles } from "../stylesheet";
import { getUserBookclubs, getUser } from "../gettingData";
import { getAuth, onAuthStateChanged } from "firebase/auth";
interface NavProps {
  navigation: any;
}

const Home: React.FC<NavProps> = ({ navigation }) => {
  const [bookClubs, setBookClubs] = useState([]);
  const [uid, setUid] = useState("");
  const [noUserMessage, setNoUserMessage] = useState("");
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
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
        getUserBookclubs(uid, setBookClubs);
        getUser(uid, setUser);
      } else {
        setNoUserMessage("No user logged in");
      }
    });
  }, [uid]);

  return (
    <View style={styles.bookContainer}>
      <Button
        title="Go To Single Book Club Page"
        onPress={() => navigation.navigate("SingleBookClubPage")}
      />
      {noUserMessage ? <Text>{noUserMessage}</Text> : null}
      <Text>{user.user_username}'s BookClubs</Text>
      {bookClubs.map((bookclub) => {
        return <BookclubCard key={bookclub} bookclubName={bookclub} />;
      })}
    </View>
  );
};

export default Home;
