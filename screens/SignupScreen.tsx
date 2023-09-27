import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Keyboard,
} from "react-native";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addUser } from "../addingData";
import { getUsers } from "../gettingData";

interface SignupScreenProps {
  navigation: any;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [mismatch, setMismatch] = useState<string | null>(null);

  const goToLogin = () => {
    navigation.navigate("Login");
  };

  const passwordCheck = (text: any) => {
    if (text != password && text != "") {
      setMismatch("Passwords do not match");
    } else {
      setMismatch(null);
      Keyboard.dismiss();
    }
  };

  const handleSignup = () => {
    if (mismatch) {
      alert("Passwords do not match");
      return;
    }
    getUsers(username)
    .then((users) => {
      if (users.length) {
        setUsername('')
        return Promise.reject({
          code: 400,
          message: 'This username is already in use' 
        })
      }
    })
    .then(() => {
      return createUserWithEmailAndPassword(auth, email, password)
    })
      .then((userCredential) => {
        const user = userCredential.user;
        addUser(userCredential.user.uid, username);
        setConfirmPassword("");
        setEmail("");
        setPassword("");
        setUsername("");
        if (user) {
          navigation.navigate("App");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        setPassword("");
        setConfirmPassword("");
      });
  };

  return (
    <ScrollView style={{flex: 1, height: 1000}} scrollEnabled={false} keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
      <Image
          style={styles.loginPageImage}
          source={require("../assets/shelf-Indulgence.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setUsername(text)}
          value={username}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoCapitalize="none"
          secureTextEntry={false}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          onSubmitEditing={Keyboard.dismiss}
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => {
            setConfirmPassword(text);
            passwordCheck(text);
          }}
          value={confirmPassword}
          autoCapitalize="none"
        />
        {mismatch ? <Text>{mismatch}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonTitle}>Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Already have an account? {'\n'}
            <Text onPress={goToLogin} style={styles.footerLink}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

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
    alignSelf: "center",
    margin: 40,
    borderRadius: 10,
    opacity: 0.8,
  },
  input: {
    height: 48,
    width: 300,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 20,
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
    textAlign:'center'
  },
  footerLink: {
    color: "#788eec",
    fontWeight: "bold",
    fontSize: 16,
    textAlign:'center'
  },
  loginPageImage: {
    alignItems: "center",
    height: 250,
    width: 250,
    backgroundColor: "blanchedalmond",
  },
});
