import { View, Text } from "react-native";
import React from "react";
import { styles } from "../stylesheet";
import moment from "moment";
import { serverTimestamp } from "firebase/firestore"; //use to post time to comment

type Comment = {
  author: string;
  date: any;
  text: string;
  title: string;
};
const CommentCard: React.FC<{ comment: Comment }> = ({ comment }) => {
  const { author, date, text, title } = comment;
  const stringDate = date.toDate();
  const commentTimeAndDate = moment(stringDate).fromNow();

  return (
    <View style={styles.commentContainer}>
      <Text style={styles.commentTitle}>{title}</Text>
      <Text style={styles.commentText}>{text}</Text>
      <View style={styles.commentMetadata}>
        <Text style={styles.commentMetadataText}>{author}</Text>
        <Text style={styles.commentMetadataText}>{commentTimeAndDate}</Text>
      </View>
    </View>
  );
};

export default CommentCard;
