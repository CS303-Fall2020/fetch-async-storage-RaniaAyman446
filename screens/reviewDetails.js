import React, { useState } from "react";
import {StyleSheet ,View, TextInput ,Button  } from "react-native";
import { setLightEstimationEnabled } from "expo/build/AR";
//import { globalStyles } from "../styles/global";
//<View style={globalStyles.container}>
 //<Button title='back to home screen' onPress={=}/>
export default function ReviewDetails({navigation ,route}) {
    const [title,setTitle]=useState("");
    const changeHandler = val =>{
        setTitle(navigation.getParam('item').title+val)
    };
   /* const submitHandler=()=>{
        navigation.goBack();
        
    }*/
    const f = navigation.getParam('edit');
    
    return(
        <View >
            <TextInput style={styles.item} onChangeText={changeHandler} defaultVlaue={navigation.getParam('item').title}/> 
            <Button onPress={()=> f(navigation.getParam('item').id,title)} title='Done' color='coral'/>
        </View>
    )
      
   
    
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: "#555"
    },
    contant: {
      padding: 40
    },
    list: {
      marginTop: 28
    }
  });
  
  