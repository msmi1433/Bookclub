import { View, Text } from "react-native";
import React from "react";
import BookSearch from "../components/BookSearch";
import { setFaveBook } from "../addingData";

type Params = {
  route: {
    params: {
      arrayId: number;
      uid: string;
      faveBooks: {
        book_author: string;
        book_title: string;
        book_img: string;
      }[];
    };
  };
};

const DesertIslandBookSelect: React.FC<Params> = ({ route }: Params) => {
  const { arrayId, uid, faveBooks } = route.params;
  return (
    <View>
      <BookSearch
        callbackFn={setFaveBook}
        userId={uid}
        arrayId={arrayId}
        faveBooks={faveBooks}
      />
    </View>
  );
};

export default DesertIslandBookSelect;
