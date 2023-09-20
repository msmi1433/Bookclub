import { View, Text, Image } from 'react-native'
import React from 'react'

interface UserFaveBooks {
  book_author: string;
  book_title: string;
  book_img: string;
}

const FavouriteBookCard: React.FC<{ userFaveBooks: UserFaveBooks }> = ({ userFaveBooks }) => {
  const { book_author, book_title, book_img} = userFaveBooks;

  return (
    <View style={{
      borderWidth: 5,
      borderBlockColor: 'blue',
      flex: 20,
      alignItems: 'center',
      justifyContent:'space-evenly',
      paddingBottom:2

    }}>
      <View style={{ flex: 10, alignItems: 'center' }}>
      <Text key="author">{book_author}</Text>
      <Text key="title">{book_title}</Text>
      </View>
      <Image key="book_image"style={{width:100, height:100}} source={{uri: book_img}}/>
    </View>
  )
}


export default FavouriteBookCard;

