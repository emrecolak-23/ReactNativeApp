import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignOutScreen from "../screens/SignOutScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();


const FirstScreenNavigator = () => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen 
        name="Log Out"
        component={SignOutScreen}
        options={{
          headerShown:false,
          headerStyle: {
            backgroundColor: "#B8405E"
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen 
        options={{
          headerShown:false,
          headerStyle: {
            backgroundColor: "#B8405E"
          },
          headerTintColor: "white",
        }}
        name="Login"
        component={LoginScreen}
        
      />
      
    </Stack.Navigator>
    
  )
}

const SecondScreenNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Login"
        component={LoginScreen}
        options={{
          headerShown:false,
          headerStyle: {
            backgroundColor: "#B8405E"
          },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          headerShown:false,
          headerStyle: {
            backgroundColor: "#B8405E"
          },
          headerTintColor: "white",
        }}
      />
      
    </Stack.Navigator>
  )
}



export {FirstScreenNavigator,SecondScreenNavigator}