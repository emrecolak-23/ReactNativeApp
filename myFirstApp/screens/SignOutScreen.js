import React  from "react";
import { View,Text,StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {getAuth, signOut} from 'firebase/auth'
import { NavigationContainer, useNavigation, withNavigation } from "@react-navigation/native";
import { customNavigation } from '../navigation/customNavigation';

// Create SignOutScreen
const SignOutScreen = ({navigation}) =>{

  // Get Authentication
  const auth = getAuth()
  // Handle Users LogOut
  const handleLogOut = () => {
    auth.signOut()
    .then(()=>{
      console.log("Çıkış yapıldı");
      navigation.navigate("Login");
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  // Navigate SignOut to Home (Just Kidding Button)
  const sendHome = () => {
    
      navigation.navigate("Home");
   
  }
// Create SignOut UI
  return (
    <View style={styles.container}>
      <Text style={styles.logOutText}>Log Out</Text>
      <View style={styles.logOutContainer}>
          <View style={styles.logOutContainerText}>
                <Text style={styles.logOutDescriptionText}>Oh no! You are leaving... Are you sure?</Text>
          </View>
          <View style={styles.logOutContainerButton}>
                <TouchableOpacity
                  onPress={handleLogOut}
                  style={styles.button}
                >
                  <Text
              style = {styles.buttonText}
                  >Yes. Log me out</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={sendHome}
                  style={styles.button}
                >
                  <Text
              style = {styles.buttonText}
                  >Just a Kidding</Text>
                </TouchableOpacity>
          </View>
      </View>
    </View>
  )
}
export default SignOutScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE6CE",
    flex:1,
    alignItems: 'center',
  },
  logOutText: {
    color: '#313552',
    fontWeight: '700',
    fontSize: 36,
    marginTop:'30%'
  },
  logOutContainer: {
    marginTop:'10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logOutContainerText: {
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logOutDescriptionText: {
    color: '#313552',
    fontWeight: '700',
    fontSize: 16,
    marginTop:'10%'
  },
  logOutContainerButton: {
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#B8405E',
    width: '100%',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: '20%'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
})