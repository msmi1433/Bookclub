import { View, Text, Image } from "react-native";
import { styles } from "../stylesheet";
import React from "react";

type SingleBook = {
  author: string;
  description: string;
  book_name: string;
  img_url: string;
};

const SingleBook: React.FC<{ singleBook: SingleBook }> = ({ singleBook }) => {
  const { book_name, author, description, img_url } = singleBook;

  return (
    <View style={styles.basicContainer}>
      <Text>SingleBook</Text>
      <Text style={styles.basicContainer}> BOOK NAME {book_name}</Text>
      <Text style={styles.basicContainer}> AUTHOR {author}</Text>
      <Text style={styles.basicContainer}>BOOK DESCRIPTION {description}</Text>

      <Image
        style={styles.basicImage}
        accessible
        accessibilityLabel={book_name}
        source={{ uri: img_url }}
      />
    </View>
  );
};

export default SingleBook;
