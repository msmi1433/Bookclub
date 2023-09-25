import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { getComments } from "../gettingData";
import CommentCard from "../components/CommentCard";
import { styles } from "../stylesheet";

const Discussion: React.FC<{ route: any }> = ({ route }) => {
  const { bookclub_id } = route.params;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(bookclub_id, "general_chat", setComments);
  }, []);

  return (
    <View style={styles.basicContainer}>
      <Text>General Chat</Text>
      {comments.map((comment) => {
        return <CommentCard key="comment" comment={comment} />;
      })}
      <Text>Post a comment</Text>
    </View>
  );
};

export default Discussion;
