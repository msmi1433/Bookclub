import { View, Text } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getComments } from '../gettingData'
import CommentCard from '../components/CommentCard'

const Discussion: React.FC<{}> = ({})=> {
  const [comments, setComments] = useState('')
  console.log(comments)

  useEffect(() => {
      getComments('KEtAeLGZ0ZjCeEoKAcvN', setComments)
  }, [])
  if (comments) {
    return (
      <View
        style={{
          flexDirection: "column",
          borderWidth: 5,
          padding: 10,
          flex: 1,
        }}
      >
      <Text>General Chat</Text>
      {comments.map((comment) => {
        <CommentCard key="comment" comment={comment}/>
      })
    }
      


      </View>

)}
}

export default Discussion