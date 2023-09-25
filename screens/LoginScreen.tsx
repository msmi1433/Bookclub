import React, { useState, useEffect } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView
} from "react-native";
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goToSignup = () => {
    navigation.navigate("Sign up");
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          navigation.navigate("App");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <ScrollView style={{flex: 1, height: 1000}} scrollEnabled={false} keyboardShouldPersistTaps="handled">
    <View style={styles.container}>
    <Image style={styles.loginPageImage} source={require('../assets/shelf-Indulgence.png')}/>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        onChangeText={(text) => setEmail(text)}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonTitle}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Don't have an account?
          <Text onPress={goToSignup} style={styles.footerLink}>
            Sign up
          </Text>
        </Text>
        <Text style={styles.footerText}>
          Can't be bothered to login?
          <Text onPress={() => navigation.navigate('App')} style={styles.footerLink}>
            Continue as abeatzzz
          </Text>
        </Text>
      </View>
    </View>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blanchedalmond",
    flex: 1,
    alignItems: "center",
    padding: 100,
    height: 1000
  },
  title: {},
  logo: {
    flex: 1,
    height: 100,
    width: 120,
    objectFit: "cover",
    alignSelf: "center",
    margin: 40,
    borderRadius: 10,
    opacity: 0.8,
  },
  input: {
    height: 48,
    borderRadius: 5,
    width: 300,
    overflow: "hidden",
    backgroundColor: "#fff",
    marginTop: 50,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: "#788eec",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    width: 300,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
  },
  loginPageImage: {
    alignItems:"center",
    height: 250, 
    width: 250,
    backgroundColor:"blanchedalmond"
  }
});