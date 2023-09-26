import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../../stylesheet';

interface UserFaveBooks {
  book_author: string;
  book_title: string;
  book_img: string;
}

const FavouriteBookCard: React.FC<{ userFaveBooks: UserFaveBooks }> = ({ userFaveBooks }) => {
  const { book_author, book_title, book_img} = userFaveBooks;

  return (
    <View style={styles.favebookcard}>
      <Text          key="author">{book_author}</Text>
      <Text          key="title">{book_title}</Text>
      <Image key="book_image"style={styles.favouriteBookImages} source={{uri: book_img}}/>
    </View>
    

  )
}


export default FavouriteBookCard;

