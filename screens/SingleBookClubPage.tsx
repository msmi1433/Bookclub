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

import { getSingleDoc, checkIfMember, getCollection } from "../gettingData";
import { leaveJoinClub } from "../addingData";

type CurrentRead = {
  author: string;
  description: string;
  book_name: string;
  img_url: string;
};

type Member = {
  user_username: string;
  user_avatar_image: "";
  user_bio: "";
  user_bookclubs: [];
  user_fave_books: [];
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
      img_url:
        "http://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pulsecarshalton.co.uk%2Fhome-v1%2Fimage-placeholder%2F&psig=AOvVaw37Hc93eITWyLv4fP6vV9LA&ust=1695824059215000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjPrYe7yIEDFQAAAAAdAAAAABAE",
    },
    members: {},
    description: "",
    img_url:
      "http://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pulsecarshalton.co.uk%2Fhome-v1%2Fimage-placeholder%2F&psig=AOvVaw37Hc93eITWyLv4fP6vV9LA&ust=1695824059215000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjPrYe7yIEDFQAAAAAdAAAAABAE",
  });

  const { bookclub_id } = route.params;
  const [members, setMembers] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isUserMember, setIsUserMember] = useState<null | boolean>(null);
  const { uid } = useContext(UserContext);

  useFocusEffect(
    React.useCallback(() => {
      Promise.all([
        getSingleDoc("bookclubs", bookclub_id, setCurrentBookClub),
        checkIfMember(uid, bookclub_id),
      ]).then((values) => {
        setIsUserMember(values[1]);
      });
    }, [])
  );

  const membersNestedArray = Object.entries(currentBookClub.members);

  const handleClick = (memberName: string) => {
    getCollection("users", setMembers);
    const membersArray = members.filter((singlemember: Member) => {
      return singlemember.user_username === memberName;
    });
    navigation.navigate("User Profile", { member: membersArray[0] });
    setModalVisible(false);
  };

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
      <Text style={{padding:10}}>
        {" "}
        {currentBookClub.name}{" "}
      </Text>

      <Image
        style={{width:300, height:300, borderRadius:10, alignItems:"center" }}
        source={{ uri: currentBookClub.img_url }}
      />
      <Text style={styles.profileBio}>
        {currentBookClub.description}
      </Text>
      <SingleBook singleBook={currentBookClub.current_read} />
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
            <View style={styles.modal}>
              <Pressable
                style={styles.modalCloseButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalCloseButtonText}>X</Text>
              </Pressable>
              <Text style={styles.modalHeaderText}>
                Click on a member to view their profile
              </Text>
              {membersNestedArray.map((member) => {
                return (
                  <View key={member[0]} style={styles.modalContainer}>
                    <Pressable
                      onPress={() => {
                        handleClick(member[0]);
                      }}
                    >
                      <View style={styles.modalProfileInfo}>
                        <Text style={styles.modalText}>{member[0]}</Text>
                        <Image
                          style={styles.modalImage}
                          source={{ uri: member[1] }}
                        />
                      </View>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          </Modal>
        </GestureRecognizer>
        <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
          <Text style={styles.buttonText}>
            Members of {currentBookClub.name}
          </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("General Chat", { bookclub_id: bookclub_id })
          }
        >
          <Text style={styles.buttonText}>General Club Discussion</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Book Chat", { bookclub_id: bookclub_id })
          }
        >
          <Text style={styles.buttonText}>
            Talk about {currentBookClub.current_read.book_name}
          </Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate("Next Book", {
            bookclub: currentBookClub,
            bookclub_id: bookclub_id,
          })
        }
      >
        <Text style={styles.buttonText}>Take a peek at next week's read</Text>
      </Pressable>

      {isUserMember === null ? null : (
        <Button
          onPress={handleJoinLeave}
          title={isUserMember ? "Leave club" : "Join club"}
          color={"#c5BAAf"}
        ></Button>
      )}
    </ScrollView>
  );
};
