import React, { useState,useEffect , Component} from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  idboard,
  Button,
  TouchableOpacity
} from "react-native";
import Header from "../components/header";
import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";
//import PropTypes from 'prop-types';
//import axios from 'axios';




export default function Home ({navigation})  {

 
    const [todos, setTodos] = useState([]);
    useEffect( ()=>{
         fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
        .then((response)=>response.json())
        .then(response=>{
          setTodos(response),
          setLoading(false)
        })
        .then((json) => console.log(json))
        .catch(e => {
          console.error(e)
        })
    },[])
  
  const onRefresh = async () => {
      setLoading(!loading);
      return fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((responseJson) => {
        setTodos(responseJson),
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
      })
    }
 
 const pressHandler2 = id =>{
     setTodos(prevTodos=>{
         return prevTodos.filter(todo =>{
             if((todo.id!=id)==false){
                 todo.completed=!todo.completed;
             }
             return true;
         });
     });
 };

  /*const pressHandler1 = ()=> {
   navigation.navigate('ReviewDetails',{todos,edit});
    };*/
 

  const pressHandler = id => {
   // navigation.navigate('ReviewDetails');
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id);
    });
    };
 
  const submitHandler = title => {
    if (title.length > 3) {
      setTodos(prevTodos => {
        return [{ title: title, id: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must over 3 chars long", [
        { title: "Understood", onPress: () => console.log("alert closed") }
      ]);
    }
  };

  const edit =(id , title) =>{
    setTodos(prevTodos =>{
      return prevTodos.filter(todo =>{
      if((todo.id !=id) == false ){
        todo.title=title;
      }
      return true;
    });
  });
  navigation.navigate('Todo');
}
  return (
    <TouchableWithoutFeedback onPress={() => {
      idboard.dismiss();
        console.log("dissmissed idboard");
      }}
    >
      <View style={styles.container}>
      <Button  title='go to review dets' onPress={navigation} />
        <Header />
        
        <View style={styles.contant}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            {(loading)? (<ActivityIndicator size="large" color="skyblue"/>)
            :(
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails',item)}>
                 <TodoItem item={item} navigation={navigation} pressHandler={pressHandler} pressHandler2={pressHandler2} edit ={edit} />
                </TouchableOpacity>
              
              )}
            />
            )}
          </View>
        </View>
        <Button  title='Refresh'  color='skyblue' onPress={onRefresh} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#555"
  },
  contant: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 28,
    flex: 1
  }
});
