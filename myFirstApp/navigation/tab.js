import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import UserScreen from '../screens/UserScreen';
import PostScreen from '../screens/PostScreen';
import TodoScreen from '../screens/UserScreen';
import SignOutScreen from '../screens/SignOutScreen';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel:false,      
      }}
      screenOptions={{
        tabBarStyle: { 
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#B8405E',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        },
      }}
      >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:"center",justifyContent:"center", top:5}}>
            <Image
              source={require('../assets/home.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? "#313552" : "#EEE6CE"
              }}
            />
            <Text style={{color:focused ? "#313552" : "#EEE6CE", fontSize:12}}>HOME</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="User" component={UserScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:"center",justifyContent:"center", top:5}}>
            <Image
              source={require('../assets/user.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? "#313552" : "#EEE6CE"
              }}
            />
            <Text style={{color:focused ? "#313552" : "#EEE6CE", fontSize:12}}>USER</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="Post" component={PostScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:"center",justifyContent:"center", top:5}}>
            <Image
              source={require('../assets/write.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? "#313552" : "#EEE6CE"
              }}
            />
            <Text style={{color:focused ? "#313552" : "#EEE6CE", fontSize:12}}>POST</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="Todo" component={TodoScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:"center",justifyContent:"center", top:5}}>
            <Image
              source={require('../assets/checklist.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? "#313552" : "#EEE6CE"
              }}
            />
            <Text style={{color:focused ? "#313552" : "#EEE6CE", fontSize:12}}>TODO</Text>
          </View>
        )
      }}/>
      <Tab.Screen name="SignOut" component={SignOutScreen} options={{
        tabBarIcon: ({focused}) => (
          <View style={{alignItems:"center",justifyContent:"center", top:5}}>
            <Image
              source={require('../assets/logout.png')}
              resizeMode='contain'
              style={{
                width:25,
                height:25,
                tintColor: focused ? "#313552" : "#EEE6CE"
              }}
            />
            <Text style={{color:focused ? "#313552" : "#EEE6CE", fontSize:12}}>OUT</Text>
          </View>
        )
      }}/>
    </Tab.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width:0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})
