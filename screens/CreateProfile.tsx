import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";

interface CreateProfileProps {
  navigation: any;
}

const CreateProfile: React.FC<CreateProfileProps> = (navigation) => {
  const [userData, setUserData] = useState({
    user_username: "",
    user_avatar_img: "",
    user_bio: "",
    user_fave_books: [
      {
        book_author: "",
        book_title: "",
        book_img: "",
      },
    ],
  });

  const handleAddFavouriteBook = () => {
    setUserData({
      ...userData,
      user_fave_books: [
        ...userData.user_fave_books,
        {
          book_author: "",
          book_title: "",
          book_img: "",
        },
      ],
    });
  };

  const handleSubmit = () => {
    // navigation.navigate("ProfilePage");
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.createProileHeader}>Create Profile</Text>
      <Text style={styles.label}>Username:</Text>
      <TextInput
        onChangeText={(text) => handleInputChange("user_username", text)}
        value={userData.user_username}
        style={styles.input}
        placeholder="Enter username"
      />

      <Text style={styles.label}>Avatar Image URL:</Text>
      <TextInput
        onChangeText={(text) => handleInputChange("user_avatar_img", text)}
        value={userData.user_avatar_img}
        style={styles.input}
        placeholder="Enter avatar image URL"
      />

      <Text style={styles.label}>Bio:</Text>
      <TextInput
        onChangeText={(text) => handleInputChange("user_bio", text)}
        value={userData.user_bio}
        style={styles.input}
        placeholder="Enter bio"
        multiline
      />

      <Text style={styles.label}>Favourite Books:</Text>
      {userData.user_fave_books.slice(0, 3).map((book, index) => (
        <View key={index}>
          <Text style={styles.favBook}>Book {index + 1}</Text>
          <Text style={styles.label}>Author:</Text>
          <TextInput
            onChangeText={(text) => {}}
            //   value={book.book_author}
            style={styles.input}
            placeholder={`Enter author of book ${index + 1}`}
          />
          <Text style={styles.label}>Title:</Text>
          <TextInput
            onChangeText={(text) => {}}
            //   value={book.book_title}
            style={styles.input}
            placeholder={`Enter title of book ${index + 1}`}
          />
          <Text style={styles.label}>Image URL:</Text>
          <TextInput
            onChangeText={(text) => {}}
            //   value={book.book_img}
            style={styles.input}
            placeholder={`Enter image URL of book ${index + 1}`}
          />
        </View>
      ))}
      <Button
        title="Add Favorite Book"
        onPress={handleAddFavouriteBook}
        style={styles.addButton}
      />
      <View style={styles.submitContainer}>
        <Button
          title="Submit"
          onPress={handleSubmit}
          style={styles.submitButton}
        />
      </View>
    </ScrollView>
  );
};

export default CreateProfile;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  createProileHeader: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  favBook: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  addButton: {
    marginTop: 10,
  },
  submitContainer: {
    marginTop: 20,
  },
});
