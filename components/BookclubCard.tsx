import { View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../stylesheet";
import { getSingleDoc } from "../gettingData";
type CurrentRead = {
  author: string;
  description: string;
  book_name: string;
  img_url: string;
};

const BookclubCard: React.FC<{ bookclub_id: string; navigation: any }> = ({
  bookclub_id,
  navigation,
}) => {
  const [currentBookClub, setCurrentBookClub] = useState<{
    name: string;
    current_read: CurrentRead;
    members: object;
    description: string;
    img_url: string;
  }>({
    name: "",
    current_read: {
      author: "",
      description: "",
      book_name: "",
      img_url: "",
    },
    members: {},
    description: "",
    img_url: "",
  });

  useEffect(() => {
    getSingleDoc("bookclubs", bookclub_id, setCurrentBookClub);
  }, []);

  const handlePress = () => {
    console.log(bookclub_id)
    navigation.navigate("SingleBookClubPage", {
      bookclub_id: bookclub_id,
    });
  };
  return (
    <View style={styles.book}>
      <Button title={currentBookClub.name} onPress={handlePress} />
    </View>
  );
};

export default BookclubCard;
