import { View, Text, Button, ScrollView } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { getUserBookclubs } from '../gettingData'
import BookclubCard from '../components/BookclubCard'
import { styles } from '../stylesheet'

const Home: React.FC<{navigation: any}> = ( {navigation} ) => {
    const [bookClubs, setBookClubs] = useState([])

    useEffect(() => {
        getUserBookclubs('users', 'cCVDQxJNt02pqrDfDubm', setBookClubs)
    }, [])

  return (
    <View style={styles.bookContainer}>
       <Button
        title="Go To Single Book Club Page"
        onPress={() => navigation.navigate("SingleBookClubPage")}
      />
 
    <Text>Dan's BookClubs</Text>
      {bookClubs.map((bookclub) => {
        return (
          <BookclubCard key={bookclub} bookclubName={bookclub} />
        )
      })}
    </View>
  )
}

export default Home