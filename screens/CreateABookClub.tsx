import { View, Text, Button, TextInput } from 'react-native'
import { styles } from '../stylesheet'
import {useState} from 'react'

const CreateABookClub = () => {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [img_url, setImg_url] = useState('')
  const [genre, setGenre] = useState('')

const handleSubmit = () => {
  alert(`This will submit with: ${'name: ' + name + ' description: ' + description + ' img_url: ' + img_url + ' genre: ' + genre}`)
  setName('')
  setDescription('')
  setImg_url('')
  setGenre('')
}

  return (
    <View >
      <Text>Create your club!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => {setName(text)}}
      />
      <TextInput
        style={styles.input}
        placeholder="Image"
        value={img_url}
        onChangeText={(text) => {setImg_url(text)}}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={(text) => {setDescription(text)}} 
      />
      <TextInput
        style={styles.input}
        placeholder="Genre"
        value={genre}
        onChangeText={(text) => {setGenre(text)}}
      />
      <Button title="Submit" onPress={handleSubmit}/>
    </View>
  );
};

export default CreateABookClub