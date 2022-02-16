import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {getAuth} from 'firebase/auth'
import Tabs from '../navigation/tab';
import { NavigationContainer } from '@react-navigation/native';

const auth = getAuth();
const userMail = auth.currentUser?.email
const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        
        <View style={styles.welcomeTextContainer}>
          <Text style= {styles.welcomeText}>Welcome to Sociella</Text>
          <Text style= {styles.welcomeText}>{auth.currentUser.email}</Text>
        </View>
        
    </View>
    
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#EEE6CE"
  },
  button: {
    backgroundColor: '#2EB086',
    width: '80%',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: '100%'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  welcomeText: {
    color: '#313552',
    fontWeight: '700',
    fontSize: 18,
  },
  welcomeTextContainer: {
    alignItems: 'center',
    marginTop: "5%",
  }
})