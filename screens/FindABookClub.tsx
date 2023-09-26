import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getJoinableClubs } from '../gettingData'
import BookclubCard from '../components/BookclubCard'

const FindABookClub: React.FC<{navigation: any}> = ({navigation}) => {
    const [joinableClubs, setJoinableClubs] = useState([])

    useEffect(() => {
        getJoinableClubs('bookclubs', setJoinableClubs)
    }, [])
  return (
    <View style={{flexDirection: 'column',
    borderWidth: 5,
    flex: 1}}>
      <Text>FindABookClub</Text>
      {joinableClubs.map((club) => {
        return (
          <BookclubCard key={club} bookclub_id={club} navigation={navigation}/>
        )
      })}
    </View>
  )
}

export default FindABookClub