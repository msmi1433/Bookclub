import { View, Text } from "react-native";
import React from "react";
import BookSearch from "../components/BookSearch";

const NextBook = () => {
  return (
    <View>
      <Text>NextBook</Text>
      //callbackFn below is placeholder!!!
      <BookSearch callbackFn={() => {}} />
    </View>
  );
};

export default NextBook;
