import { View, Text } from 'react-native'
import { useState, useEffect } from "react";
import { getComments } from "../gettingData";
import CommentCard from "../components/CommentCard";
import { styles } from "../stylesheet";


const BookChat: React.FC<{}> = ({}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
      getComments("KEtAeLGZ0ZjCeEoKAcvN", "book_chat", setComments);
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

export default BookChat