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
      <Text key="title"style={{fontSize:16, fontWeight:"bold", textAlign:"center"}}>{book_title}</Text>
      <Text key="author" style={{fontSize:14, fontStyle:"italic", marginBottom: 2}}>{book_author}</Text>
      <Image key="book_image"style={styles.favouriteBookImages} source={{uri: book_img}}/>
    </View>
    

  )
}


export default FavouriteBookCard;

