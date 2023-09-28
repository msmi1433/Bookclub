import { View, Text, Image, ScrollView } from "react-native";
import React, { useDebugValue, useEffect, useState } from "react";
import BookSearch from "../components/BookSearch";
import { setNextRead } from "../addingData";
import { styles } from "../stylesheet";

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
    <ScrollView>
      <View>
        <BookSearch
          callbackFn={setNextRead}
          stateSetter={setNextReadState}
          bookclub_id={bookclub_id}
        />

        <Text style={styles.header}> Upcoming Book</Text>
        <Text style={styles.nextReadSearchText}>
          To change the next read, please use the search bar above.
        </Text>
        {nextReadState.book_name !== "" ? (
          <View style={styles.currentBookContainer}>
            <Text style={styles.currentBookText}>Our next read is...</Text>
            <View style={styles.nextBookHeader}>
              <View style={styles.bookInfoContainer}>
                <Image
                  source={{ uri: nextReadState.img_url }}
                  style={styles.bookImage}
                />
                <View style={styles.nextBookByHeader}>
                  <Text style={styles.bookNameText}>
                    {nextReadState.book_name}
                  </Text>
                  <Text style={styles.bookAuthorText}>
                    by {nextReadState.author}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.bookDescriptionText}>
              {nextReadState.description}
            </Text>
          </View>
        ) : (
          <Text style={styles.currentBookText}>
            No next read currently set...
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default NextBook;
