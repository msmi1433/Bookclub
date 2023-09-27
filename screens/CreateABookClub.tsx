import { View, Text, Pressable, TextInput, ScrollView, Image } from "react-native";
import { styles } from "../stylesheet";
import { useState } from "react";
import { createBookClub } from "../addingData";
import React from "react";
import Icon from 'react-native-vector-icons/Feather'


const CreateABookClub: React.FC<{navigation: any}> = ({navigation}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [img_url, setImg_url] = useState("");
  const [genre, setGenre] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleSubmit = () => {
    const clubData = {
      name: name,
      description: description,
      img_url: img_url,
      genre: genre,
      current_read: {
        author: '',
        book_name: '',
        description: '',
        img_url: 'http://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pulsecarshalton.co.uk%2Fhome-v1%2Fimage-placeholder%2F&psig=AOvVaw37Hc93eITWyLv4fP6vV9LA&ust=1695824059215000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjPrYe7yIEDFQAAAAAdAAAAABAE'
      },
      members: [],
      next_read: {
        author: '',
        book_name: '',
        description:'',
        img_url: "http://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pulsecarshalton.co.uk%2Fhome-v1%2Fimage-placeholder%2F&psig=AOvVaw37Hc93eITWyLv4fP6vV9LA&ust=1695824059215000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCOjPrYe7yIEDFQAAAAAdAAAAABAE"
      }
    };
    createBookClub(clubData)
      .then(() => {
        setName("");
        setDescription("");
        setImg_url("");
        setGenre("");
        setIsCreated(true);
      })
      .catch((err) => {
        alert(err);
      });
  };
  if (isCreated) {
    return (
      <ScrollView>
      <View style={styles.formContainer}>
      <Text style={styles.singleBookclubTitle}>
        Success!
      </Text>
      <Icon name='check-circle' size={100} color='green' style={{padding: 40}}/>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Discover Home')}>
        <Text style={styles.buttonText}>Go back</Text>
      </Pressable>
      </View>
      </ScrollView>
    );
  } else
    return (
      <ScrollView>
      <View style={styles.formContainer}>
        <Text style={styles.singleBookclubTitle}>Create your club!</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => {
            setName(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Image"
          value={img_url}
          onChangeText={(text) => {
            setImg_url(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => {
            setDescription(text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Genre"
          value={genre}
          onChangeText={(text) => {
            setGenre(text);
          }}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Create club</Text>
        </Pressable>
      </View>
      </ScrollView>
    );
};

export default CreateABookClub;
