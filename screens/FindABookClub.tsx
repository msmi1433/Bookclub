import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getJoinableClubs } from '../gettingData'

const FindABookClub: React.FC<{}> = () => {
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
            <View style={{display: 'flex',
            flex: 0.25, alignItems: 'center', justifyContent: 'center'}}>
            <Text>{club}</Text>
            <Button title='Join'/>
            </View>
        )
      })}
    </View>
  )
}

export default FindABookClub