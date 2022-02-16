import React  from "react";
import { View,Text,StyleSheet } from "react-native";


const TodoScreen = () =>{
  const [todos,setTodos] = useState([])

  // useEffect(()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(response=>response.json())
  //     .then(response=>setUsers(response))
  //     .catch(error=>console.log(error))
  // },[]);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(response=>setTodos(response.data))
      .catch(error=>console.log(error));
  },[]);

  return (

    <View style={styles.container}>
      <ScrollView>
      {
        todos.map((item)=>{
          return (
            <View swtyle={styles.postContainer}>
                <View style={styles.id}>
                <Text style={styles.idText}>{item.id}</Text>
                </View>
                <View style={styles.postInfo}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.info}>{item.completed}</Text>
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
export default TodoScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE6CE",
    flex: 1,
    alingItems: "center",
  },
  postContainer:{
    alingItems: "center",
    justifyContent:"center",
    padding: 20,
    backgroundColor: "#313552",
    margin:"1%",
    flexDirection:"row"
  },
  title: {
    color: "white",
    fontWeight: '700',
    fontSize: 16,
    marginLeft: "10%"
  },
  info:{
    color: "gray",
    fontWeight: '500',
    fontSize: 12,
    marginLeft:"10%",
    textAlign: "auto"
  },
  postInfo:{
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