import { View, Text, Button } from 'react-native'
import React from 'react'
import { useEffect, useState } from 'react'
import { getUserBookclubs } from '../gettingData'
import BookclubCard from '../components/BookclubCard'

const Home: React.FC<{navigation: any}> = ( {navigation} ) => {
    const [bookClubs, setBookClubs] = useState([])

    useEffect(() => {
        getUserBookclubs('users', 'cCVDQxJNt02pqrDfDubm', setBookClubs)
    }, [])

  return (
    <View style={{
        flexDirection: 'column',
        borderWidth: 5,
        flex: 1
    }}>
       <Button
        title="Go To Single Book Club Page"
        onPress={() => navigation.navigate("SingleBookClubPage")}
      />
 
    <Text>Dan's BookClubs</Text>
      {bookClubs.map((bookclub) => {
        return (
          <BookclubCard bookclubName={bookclub} />
        )
      })}
    </View>
  )
}

export default Home