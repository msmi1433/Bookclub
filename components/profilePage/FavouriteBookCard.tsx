import { View, Text } from 'react-native'
import React from 'react'

interface UserFaveBooks {
  book_author: string;
  book_title: string;
}

const FavouriteBookCard: React.FC<{ userFaveBooks: UserFaveBooks }> = ({ userFaveBooks }) => {
  const { book_author, book_title} = userFaveBooks;

  return (
    <View style={{
      borderWidth: 5,
      borderBlockColor: 'blue',
      flex: 0.2,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>{book_author}</Text>
      <Text>{book_title}</Text>
    </View>
  )
}


export default FavouriteBookCard;

