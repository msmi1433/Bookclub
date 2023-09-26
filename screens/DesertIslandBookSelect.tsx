import { View, Text } from "react-native";
import React from "react";
import BookSearch from "../components/BookSearch";

type Params = {
  route: { params: { arrayId: number } };
};

const DesertIslandBookSelect = ({ route }: Params) => {
  const { arrayId } = route.params;
  console.log(arrayId);
  return (
    <View>
      <BookSearch />
    </View>
  );
};

export default DesertIslandBookSelect;
