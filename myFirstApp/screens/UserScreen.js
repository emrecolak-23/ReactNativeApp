import React, {useEffect, useState}  from "react";
import { View,Text,StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import axios from 'axios'

// Create User Screen
const UserScreen = () =>{

  // Create State With Array
  const [users,setUsers] = useState([])

  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response=>response.json())
  //     .then(response=>setUsers(response))
  //     .catch(error=>console.log(error))
  // },[]);

// Get user Data With AXİOS
  useEffect(()=>{

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response=>setUsers(response.data))
      .catch(error=>console.log(error));
  },[]);

  return (

    <View style={styles.container}>
      <ScrollView>
      {
        // Create Custom Table View
        users.map((item)=>{
          return (
            <View key={item.id} style={styles.userContainer}>
                <View style={styles.id}>
                <Text style={styles.idText}>{item.id}</Text>
                </View>
                <View style={styles.userInfo}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.info}>{item.email}</Text>
                  <Text style={styles.info}>{item.phone}</Text>
                  <Text style={styles.info}>{item.website}</Text>
                </View>
             </View>
              
          )
        })
      }
      </ScrollView>
    </View>

    // <View style={styles.container}>
    // {users.map(user=>{
    //   return <View style={styles.userContainer}>
    //     <Text style={styles.name}>{user.name}</Text>
    //     <Text style={styles.email}>{user.email}</Text>
    //     </View>
    // })}
    // </View>
  )
}
export default UserScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE6CE",
    flex: 1,
    alingItems: "center",
  },
  userContainer:{
    alingItems: "center",
    justifyContent:"center",
    padding: 20,
    backgroundColor: "#313552",
    margin:"1%",
    flexDirection:"row"
  },
  name: {
    color: "white",
    fontWeight: '700',
    fontSize: 16,
    marginLeft: "10%"
  },
  info:{
    color: "gray",
    fontWeight: '500',
    fontSize: 12,
    marginLeft:"10%"
  },
  userInfo:{
    width: "80%"
  },
  id:{
    width:"%20",
    alingItems: "center",
    justifyContent:"center",
  },
  idText: {
    color: "#EEE6CE",
    fontWeight: '700',
    fontSize: 36,
  }

})