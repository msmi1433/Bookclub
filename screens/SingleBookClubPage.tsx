import {
  Text,
  Button,
  ScrollView,
  Image,
  View,
  Modal,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { styles } from "../stylesheet";
import SingleBook from "../components/SingleBook";
import GestureRecognizer from "react-native-swipe-gestures";
import { useContext } from "react";
import { UserContext } from "../usercontext";

import { useFocusEffect } from "@react-navigation/native";
import React from "react";

import { getSingleDoc, checkIfMember } from "../gettingData";
import { leaveJoinClub } from "../addingData";

type CurrentRead = {
  author: string;
  description: string;
  book_name: string;
  img_url: string;
};

export const SingleBookClubPage: React.FC<{
  navigation: any;
  route: any;
}> = ({ navigation, route }) => {
  const [currentBookClub, setCurrentBookClub] = useState<{
    name: string;
    current_read: CurrentRead;
    members: object;
    description: string;
    img_url: string;
  }>({
    name: "",
    current_read: {
      author: "",
      description: "",
      book_name: "",
      img_url: "",
    },
    members: {},
    description: "",
    img_url: "",
  });

  const { bookclub_id } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [isUserMember, setIsUserMember] = useState<null | boolean>(null);
  const { uid } = useContext(UserContext);

  useFocusEffect(
    React.useCallback(() => {
      getSingleDoc("bookclubs", bookclub_id, setCurrentBookClub);
    }, [])
  );

  useFocusEffect(
    React.useCallback(() => {
      checkIfMember(uid, bookclub_id).then((bool) => {
        setIsUserMember(bool);
      });
    }, [])
  );

  const membersNestedArray = Object.entries(currentBookClub.members);

  const handleJoinLeave = () => {
    if (isUserMember === null) {
      alert("Problem getting user status");
      return;
    }
    leaveJoinClub(uid, bookclub_id, isUserMember).then(() => {
      setIsUserMember((isUserMember) => {
        return !isUserMember;
      });
    });
  };

  return (
    <ScrollView nestedScrollEnabled={true}>
      <Text style={styles.basicContainer}>
        {" "}
        BOOK CLUB NAME {currentBookClub.name}{" "}
      </Text>

  
      <Image
        style={styles.basicImage}
        source={{ uri: currentBookClub.img_url }}
      />

      <SingleBook singleBook={currentBookClub.current_read} />
      <Text style={styles.basicContainer}>
        BOOK CLUB DESCRIPTION: {currentBookClub.description}
      </Text>

      <View>
        <GestureRecognizer
          style={{ flex: 1 }}
          onSwipeDown={() => setModalVisible(false)}
        >
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.basicContainer}>
              {membersNestedArray.map((member) => {
                return (
                  <View style={styles.basicContainer} key={member[0]}>
                    <Text>{member[0]}</Text>
                    <Image
                      style={styles.basicImage}
                      source={{ uri: member[1] }}
                    />
                  </View>
                );
              })}
            </View>
            <Pressable style={styles.button}onPress={() => setModalVisible(false)}>
              <Text style={styles.button}>HIDE MEMBERS</Text>
            </Pressable> // NEEDS STYLING
          </Modal>
        </GestureRecognizer>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>
            Members of {currentBookClub.name}
          </Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => navigation.navigate("General Chat", { bookclub_id: bookclub_id }) }>
            <Text style={styles.buttonText}>
              General Club Discussion
            </Text>
          </Pressable>
         
          {/* <Button
        title="GENERAL CLUB DISCUSSION"
        onPress={() =>
          navigation.navigate("General Chat", { bookclub_id: bookclub_id })
        } */}
      {/* /> */}

      <Button
        title="DISCUSS THIS WEEKS BOOK"
        onPress={() =>
          navigation.navigate("Book Chat", { bookclub_id: bookclub_id })
        }
      />
      </View>

      <Button
        title="GO TO NEXT BOOK"
        onPress={() =>
          navigation.navigate("Next Book", {
            bookclub: currentBookClub,
            bookclub_id: bookclub_id,
          })
        }
      />
      {isUserMember === null ? null : (
        <Button
          onPress={handleJoinLeave}
          title={isUserMember ? "Leave club" : "Join club"}
        ></Button>
      )}
    </ScrollView>
  );
};
