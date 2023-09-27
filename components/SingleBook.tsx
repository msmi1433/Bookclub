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
    <View style={styles.currentBookContainer}>
      <Text style={styles.currentBookText}>Currently Reading:</Text>
      <View style={styles.nextBookHeader}>
      <Image
        style={styles.bookImage}
        accessible
        accessibilityLabel={book_name}
        source={{ uri: img_url }}
      />
      <Text style={styles.bookNameText}>{book_name}</Text>
      <Text style={styles.bookAuthorText}>by {author}</Text>
      </View>
      <Text style={styles.bookDescriptionText}>{description}</Text>
    </View>
  );
};

export default SingleBook;
