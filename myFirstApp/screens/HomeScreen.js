import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import {getAuth} from 'firebase/auth'
import Tabs from '../navigation/tab';
import { NavigationContainer } from '@react-navigation/native';

// Create Auth and Get User Email
const auth = getAuth();
const userMail = auth.currentUser?.email
// Create HomeScreen
const HomeScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
        
        <View style={styles.welcomeTextContainer}>
          <Text style= {styles.welcomeText}>Welcome to Sociella</Text>
          <Image
              source={require('../assets/scoiella.png')}
              resizeMode='contain'
              style={{
                width:150,
                height:150,
                borderRadius:150/2,
                marginTop:"2%"
              }}
            />
        </View>
        <Text style= {styles.emailText}>{auth.currentUser.email}</Text>
        
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
    fontSize: 32,
    marginTop: "5%"
  },
  welcomeTextContainer: {
    alignItems: 'center',
    marginTop: "30%",
  },
  emailText: {
    color: '#313552',
    fontWeight: '700',
    fontSize: 18,
  }
})