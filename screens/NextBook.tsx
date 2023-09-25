import { View, Text, Image } from "react-native";
import React from "react";
import BookSearch from "../components/BookSearch";
import { setNextRead } from "../addingData";

const NextBook = ({
  route,
}: {
  route: {
    params: {
      bookclub: {
        next_read: {
          author: string;
          book_name: string;
          description: string;
          img_url: string;
        };
      };
    };
  };
}) => {
  const { bookclub } = route.params;
  const { next_read } = bookclub;

  return (
    <View>
      <Text>NextBook</Text>
      <BookSearch callbackFn={setNextRead} />
      <Text>To change the next read, please use the search bar above.</Text>
      <Text>Our next read is...</Text>
      <Image
        source={{ uri: next_read.img_url }}
        style={{ width: 100, height: 150 }}
      />
      <Text>{next_read.book_name}</Text>
      <Text>{next_read.author}</Text>
      <Text>{next_read.description}</Text>
    </View>
  );
};

export default NextBook;
