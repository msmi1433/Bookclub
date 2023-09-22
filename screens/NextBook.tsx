import { View, Text } from "react-native";
import React from "react";
import BookSearch from "../components/BookSearch";

const NextBook = () => {
  return (
    <View>
      <Text>NextBook</Text>
      <BookSearch callbackFn={() => {}} />
    </View>
  );
};

export default NextBook;
