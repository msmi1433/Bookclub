import { View, Text } from "react-native";
import React from "react";
import BookSearch from "../components/BookSearch";
import { setNextRead } from "../addingData";

const NextBook = () => {
  return (
    <View>
      <Text>NextBook</Text>
      <BookSearch callbackFn={setNextRead} />
    </View>
  );
};

export default NextBook;
