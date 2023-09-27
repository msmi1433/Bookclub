import { View, Text, Image } from "react-native";
import React, { useDebugValue, useEffect, useState } from "react";
import BookSearch from "../components/BookSearch";
import { setNextRead } from "../addingData";

type RouteParams = {
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
      bookclub_id: string;
    };
  };
};

const NextBook: React.FC<RouteParams> = ({ route }: RouteParams) => {
  const { bookclub, bookclub_id } = route.params;
  const { next_read } = bookclub;

  const [nextReadState, setNextReadState] = useState(next_read);

  return (
    <View>
      <Text>NextBook</Text>
      <BookSearch
        callbackFn={setNextRead}
        stateSetter={setNextReadState}
        bookclub_id={bookclub_id}
      />
      <Text>To change the next read, please use the search bar above.</Text>
      <Text>Our next read is...</Text>
      <Image
        source={{ uri: nextReadState.img_url }}
        style={{ width: 100, height: 150 }}
      />
      <Text>{nextReadState.book_name}</Text>
      <Text>{nextReadState.author}</Text>
      <Text>{nextReadState.description}</Text>
    </View>
  );
};

export default NextBook;
