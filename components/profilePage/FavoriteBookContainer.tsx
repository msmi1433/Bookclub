import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import { getUserFaveBooks } from '../../gettingData'
import FavouriteBookCard from './FavouriteBookCard'



const FavouriteBookContainer: React.FC<{}> = ({})=> {
    const [faveBooks, setFaveBooks] = useState([])

    useEffect(() => {
        getUserFaveBooks('users', 'cCVDQxJNt02pqrDfDubm', setFaveBooks )
    }, [])

    return(
    <View style={{
        flexDirection: 'column',
        borderWidth: 5,
        flex: 1
    }}>
      <Text>Dans's Top 3 Desert Island Books!</Text>
      {faveBooks.map((favebook) => {
        return(
        <FavouriteBookCard key={favebook} userFaveBooks={favebook} />
        )
    })}
    </View>
    )
} 

export default FavouriteBookContainer