import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { app } from '../firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';


// Create Login Screen
const LoginScreen = ({navigation}) => {
 // Create State
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const auth = getAuth();

// Create Automatically Navigate Authentication
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if (user) {
          navigation.navigate("Home")
      }
    })
    return unsubscribe
  },[])

  // Handle SignUp With Firebase
  const handleSignUp = () =>{
    createUserWithEmailAndPassword(auth,email,password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log("Registerred: ",user.email);
      navigation.navigate("Home");
      
    })
    .catch(error =>{
      alert(error.message);
    })
  }
// Handle LogIn With Firebase
  const handleLogIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log("Logged In: ",user);
        navigation.navigate("Home");
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  return (
      <KeyboardAvoidingView
      style={styles.container}
    >
        
    <View style={styles.inputGroupContainer}>
   
    <Text style={styles.welcomeText}>SOCIELLA</Text>

      <View style={styles.inputContainer}>  
        <TextInput 
        placeholder='Email'
        value={email}
        onChangeText={text=> setEmail(text)}
        style = {styles.input}
        />
        <TextInput 
        placeholder='Password'
        value={password}
        onChangeText={text=>setPassword(text)}
        style = {styles.input}
        secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogIn}
            style={styles.button}
          >
            <Text
              style = {styles.buttonText}
            >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button,styles.buttonOutline]}
          >
            <Text
              style = {styles.buttonOutlineText}
            >Register</Text>
          </TouchableOpacity>
      </View>
      </View>
      

    </KeyboardAvoidingView>
    
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#EEE6CE',
  },
 
  inputGroupContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    marginTop: '90%',
    marginLeft: 0,
    backgroundColor: '#313552',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100
  },
  inputContainer: {
    width: '80%',
    marginTop: '25%'
  },
  welcomeText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 36,
    marginTop: '10%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#2EB086',
    width: '100%',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutline: {
    backgroundColor: '#B8405E',
    marginTop: 10,
  },
  buttonOutlineText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  }
})