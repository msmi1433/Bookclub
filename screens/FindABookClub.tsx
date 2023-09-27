import { View, Text, Button, ScrollView } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getJoinableClubs } from "../gettingData";
import BookclubCard from "../components/BookclubCard";
import { styles } from "../stylesheet";

const FindABookClub: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [joinableClubs, setJoinableClubs] = useState([]);

  useEffect(() => {
    getJoinableClubs("bookclubs", setJoinableClubs);
  }, []);
  return (
    <View style={styles.findaBookClubContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.findaBookClub}>FindABookClub</Text>
        {joinableClubs.map((club) => {
          return (
            <BookclubCard
              key={club}
              bookclub_id={club}
              navigation={navigation}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FindABookClub;
