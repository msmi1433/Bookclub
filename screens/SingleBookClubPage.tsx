import {
  Text,
  Button,
  ScrollView,
  Image,
  View,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { useEffect, useState } from "react";
import { getSingleDoc } from "../gettingData";
import { styles } from "../stylesheet";
import DropDownPicker from "react-native-dropdown-picker";
import SingleBook from "../components/SingleBook";
import GestureRecognizer from "react-native-swipe-gestures";

type CurrentRead = {
  author: string;
  description: string;
  book_name: string;
  img_url: string;
};

export const SingleBookClubPage: React.FC<{ navigation: any }> = ({
  navigation,
}) => {
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

  const { name, current_read, members, description, img_url } = currentBookClub;

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Book Chat", value: "bookchat" },
    { label: "General", value: "general" },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getSingleDoc("bookclubs", "KEtAeLGZ0ZjCeEoKAcvN", setCurrentBookClub);
  }, []);

  const membersNestedArray = Object.entries(members);

  return (
    <ScrollView nestedScrollEnabled={true}>
      <Text style={styles.basicContainer}> BOOK CLUB NAME {name} </Text>
      <Image style={styles.basicImage} source={{ uri: img_url }} />

      <SingleBook singleBook={current_read} />

      <Text style={styles.basicContainer}>
        BOOK CLUB DESCRIPTION: {description}
      </Text>

      <Button
        title="GENERAL CLUB DISCUSSION"
        onPress={() =>
          Alert.alert("Takes you to general chat - separate page?")
        }
      />

      <Button
        title="DISCUSS THIS WEEKS BOOK"
        onPress={() =>
          Alert.alert("Takes you to this weeks book chat - separate page?")
        }
      />

      <View style={styles.centeredView}>
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
                    <Text >{member[0]}</Text>
                    <Image
                      style={styles.basicSmallImage}
                      source={{ uri: member[1] }}
                    />
                  </View>
                );
              })}
            </View>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.giantText}>HIDE MEMBERS</Text>
            </Pressable>
          </Modal>
        </GestureRecognizer>
        <Pressable onPress={() => setModalVisible(true)}>
          <Text>
            BOOK CLUB MEMBERS - CLICK ME PLS - needs to show it's clickable with
            styling
          </Text>
        </Pressable>
      </View>

      <Button
        title="GO TO NEXT BOOK"
        onPress={() => navigation.navigate("Next Book")}
      />
    </ScrollView>
  );
};
