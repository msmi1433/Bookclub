import { View, ScrollView, Text, TextInput, Button } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { getComments } from "../gettingData";
import CommentCard from "../components/CommentCard";
import { styles } from "../stylesheet";
import { addComment } from "../addingData";
import { serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { UserContext } from "../usercontext";
import { getUser } from "../gettingData";

const Discussion = ({
  route
}: {
  route: { params: { bookclub_id: string } };
}) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [newCommentTitle, setNewCommentTitle] = useState("");
 
  const { uid } = useContext(UserContext);
  const [user, setUser] = useState<{ user_username: string }>({
    user_username: "",
  });

  const { bookclub_id } = route.params;

  useEffect(() => {
    getUser(uid, setUser);
  }, []);

  useEffect(() => {
    getComments(bookclub_id, "book_chat", setComments);
  }, []);

  const handleSubmit = () => {
    const newComment = {
      author: user.user_username,
      date: serverTimestamp(),
      text: newCommentText,
      title: newCommentTitle,
    };

    addComment(bookclub_id, "book_chat", newComment)
      .then(() => {

        setNewCommentText("");
        setNewCommentTitle("");
      })
      .then(() => {
        getComments(bookclub_id, "book_chat", setComments);
      });
  };

  return (
    <View style={styles.basicContainer}>
      <ScrollView>
        <Text>Chat about this weeks book</Text>
        {comments.map((comment, index) => {
          return <CommentCard key={`BookComment${index}`}comment={comment} />;
        })}
        <Text>Post a comment</Text>
        <TextInput
          style={styles.input}
          placeholder="comment title"
          onChangeText={(text) => setNewCommentTitle(text)}
          value={newCommentTitle}
          multiline={true}
          enablesReturnKeyAutomatically={true}
        ></TextInput>
        <TextInput
          style={styles.commentInput}
          placeholder="add comment"
          value={newCommentText}
          onChangeText={(text) => setNewCommentText(text)}
          multiline={true}
          enablesReturnKeyAutomatically={true}
        ></TextInput>
        <Button title="SUBMIT" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

export default Discussion;
