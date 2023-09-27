import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Button,
  Image,
} from "react-native";
import { auth, db } from "../firebase-config";
import { doc, updateDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../stylesheet";
import { UserContext } from "../usercontext";
import { getUser, getUserFaveBooks } from "../gettingData";
import { useFocusEffect } from "@react-navigation/native";

export interface User {
  user_user_id: string;
  user_username: string;
  user_avatar_img: string;
  user_bio: string;
}

const UpdateProfile: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { uid } = useContext(UserContext);
  const initialUserState: User = {
    user_user_id: uid,
    user_username: "",
    user_avatar_img: "",
    user_bio: "",
  };
  const [user, setUser] = useState<User>(initialUserState);
  const [faveBooksState, setFaveBooksState] = useState<
    {
      book_author: string;
      book_title: string;
      book_img: string;
    }[]
  >([
    { book_author: "", book_title: "", book_img: "" },
    { book_author: "", book_title: "", book_img: "" },
    { book_author: "", book_title: "", book_img: "" },
  ]);

  useFocusEffect(
    React.useCallback(() => {
      getUserFaveBooks("users", uid, setFaveBooksState);
      getUser(uid, setUser);
    }, [])
  );

  const handleInputChange = (field: string, value: string) => {
    setUser({ ...user, [field]: value });
  };

  const handleSubmit = () => {
    const userRef = doc(db, "users", uid);
    updateDoc(userRef, {
      user_username: user.user_username,
      user_bio: user.user_bio,
      user_avatar_img: user.user_avatar_img,
    })
      .then(() => {
        navigation.navigate("ProfilePage");
      })
      .catch((error) => {
        alert("Error updating");
      });
  };

  return (
    <ScrollView style={styles.updateProfileContainer}>
      <Text style={styles.updateProfileHeader}>Update Profile</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        value={user.user_username}
        onChangeText={(text) => handleInputChange("user_username", text)}
        style={styles.inputProfileForm}
      />

      <Text style={styles.label}>Profile Picture (URL)</Text>
      <TextInput
        value={user.user_avatar_img}
        onChangeText={(text) => handleInputChange("user_avatar_img", text)}
        style={styles.inputProfileForm}
      />

      <Text style={styles.label}>Bio:</Text>
      <TextInput
        value={user.user_bio}
        onChangeText={(text) => handleInputChange("user_bio", text)}
        style={styles.inputProfileForm}
        multiline
      />

      <View style={styles.updateProfileBtnWrapper}>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.nextBookHeader}>
        {/* Book1 */}
        <View style={styles.nextBookByHeader}>
          <Image
            source={{ uri: faveBooksState[0].book_img }}
            style={styles.bookImage}
          />
          {/* <Text style={styles.bookNameTextUpdate}>
            {faveBooksState[0].book_title}
          </Text>
          <Text style={styles.bookAuthorTextUpdate}>
            by {faveBooksState[0].book_author}
          </Text> */}
          <Button
            title="Edit"
            onPress={() => {
              navigation.navigate("Desert Island Book Selection", {
                arrayId: 0,
                uid: uid,
                faveBooks: faveBooksState,
              });
            }}
          />
        </View>

        {/* Book2 */}
        <View style={styles.nextBookByHeader}>
          <Image
            source={{ uri: faveBooksState[1].book_img }}
            style={styles.bookImage}
          />
          {/* <Text style={styles.bookNameTextUpdate}>
            {faveBooksState[1].book_title}
          </Text>
          <Text style={styles.bookAuthorTextUpdate}>
            by {faveBooksState[1].book_author}
          </Text> */}
          <Button
            title="Edit"
            onPress={() => {
              navigation.navigate("Desert Island Book Selection", {
                arrayId: 1,
                uid: uid,
                faveBooks: faveBooksState,
              });
            }}
          />
        </View>

        {/* Book3 */}
        <View style={styles.nextBookByHeader}>
          <Image
            source={{ uri: faveBooksState[2].book_img }}
            style={styles.bookImage}
          />
          {/* <Text style={styles.bookNameTextUpdate}>
            {faveBooksState[2].book_title}
          </Text>
          <Text style={styles.bookAuthorTextUpdate}>
            by {faveBooksState[2].book_author}
          </Text> */}
          <Button
            title="Edit"
            onPress={() => {
              navigation.navigate("Desert Island Book Selection", {
                arrayId: 2,
                uid: uid,
                faveBooks: faveBooksState,
              });
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UpdateProfile;
