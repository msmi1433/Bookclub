import { View, Text } from "react-native";
import React from "react";
import { styles } from "../stylesheet";

import { serverTimestamp } from "firebase/firestore"; //use to post time to comment

type Comment = {
  author: string;
  date: any;
  text: string;
  title: string;
};
const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => {
  const { author, date, text, title } = comment;
  const stringDate = date.toDate().toString();
  const commentTime = stringDate.slice(17, 24);
  const commentDate = stringDate.slice(0, 10);
  const commentTimeAndDate = `${commentTime} ${commentDate}`;


  return (
    <View style={styles.basicContainer}>
      <Text>COMMENT AUTHOR: {author}</Text>
      <Text>TIME STAMP: {commentTimeAndDate}</Text>
      <Text>COMMENT TITLE: {title}</Text>
      <Text>COMMENT TEXT: {text}</Text>
    </View>
  );
};

export default CommentCard;
