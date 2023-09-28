import { View, Text, Image, ScrollView } from "react-native";
import BookSearch from "../components/BookSearch";
import React from "react";
import { Route } from "@react-navigation/native";
import { useState } from "react";
import { setFirstRead } from "../addingData";
import { styles } from "../stylesheet";

type RouteParams = {
  route: {
    params: {
      bookclub_id: string;
    };
  };
};

type CurrentRead = {
  author: string;
  book_name: string;
  description: string;
  img_url: string;
};

export const FirstBook: React.FC<RouteParams> = ({ route }: RouteParams) => {
  const { bookclub_id } = route.params;
  const [currentRead, setCurrentRead] = useState<CurrentRead | null>(null);
  return (
    <ScrollView>
      <View>
        <BookSearch
          callbackFn={setFirstRead}
          stateSetter={setCurrentRead}
          bookclub_id={bookclub_id}
        />
        <Text style={styles.header}>Our first read is...</Text>
        <Text style={styles.nextReadSearchText}>
          To change the first read, please use the search bar above.
        </Text>
        {currentRead !== null ? (
          <View style={styles.currentBookContainer}>
            <View style={styles.nextBookHeader}>
              <View style={styles.bookInfoContainer}>
                <Image
                  source={{ uri: currentRead?.img_url }}
                  style={styles.bookImage}
                />
                <View style={styles.nextBookByHeader}>
                  <Text style={styles.bookNameText}>
                    {currentRead?.book_name}
                  </Text>
                  <Text style={styles.bookAuthorText}>
                    by {currentRead?.author}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={styles.bookDescriptionText}>
              {currentRead?.description}
            </Text>
          </View>
        ) : null}
      </View>
    </ScrollView>
  );
};
