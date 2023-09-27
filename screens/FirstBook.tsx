import { View, Text, Image } from 'react-native'
import BookSearch from '../components/BookSearch';
import React from 'react'
import { Route } from '@react-navigation/native';
import { useState } from 'react';
import { setFirstRead } from '../addingData';

type RouteParams = {
    route: {
      params: {
        bookclub_id: string;
      };
    };
  };

type CurrentRead = {
    author: string;
    book_name: string;
    description: string;
    img_url: string
}

  
export const FirstBook: React.FC<RouteParams> = ({route}: RouteParams) => {
    const { bookclub_id } = route.params;
    const [currentRead, setCurrentRead] = useState<CurrentRead | null>(null)
    return (
        <View>
          <Text>NextBook</Text>
          <BookSearch
            callbackFn={setFirstRead}
            stateSetter={setCurrentRead}
            bookclub_id={bookclub_id}
          />
          <Text>To change the first read, please use the search bar above.</Text>
          <Text>Our first read is...</Text>
          <Image
            source={{ uri: currentRead?.img_url}}
            style={{ width: 100, height: 150 }}
          />
          <Text>{currentRead?.book_name}</Text>
          <Text>{currentRead?.author}</Text>
          <Text>{currentRead?.description}</Text>
        </View>
      );
    };
