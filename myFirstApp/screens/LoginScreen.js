import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Image} from 'react-native'

const LoginScreen = () => {
  return (
      <KeyboardAvoidingView
      style={styles.container}
    >
        
    <View style={styles.inputGroupContainer}>
   
    <Text style={styles.welcomeText}>Welcome to our app</Text>

      <View style={styles.inputContainer}>  
        <TextInput 
        placeholder='email'
        //value=''
        //onChangeText={text=>}
        style = {styles.input}
        />
        <TextInput 
        placeholder='password'
        //value=''
        //onChangeText={text=>}
        style = {styles.input}
        secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={()=>{ }}
            style={styles.button}
          >
            <Text
              style = {styles.buttonText}
            >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>{ }}
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
    fontSize: 24,
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