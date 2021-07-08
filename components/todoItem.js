import React from 'react';
import { StyleSheet, Text, TouchableOpacity,View,CheckBox} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';



export default function TodoItem({ item, pressHandler ,navigation,pressHandler2 , edit}) {
    
    return(
        
        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',{item,edit})}>
            <View style={styles.item}>
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <MaterialIcons name='delete' size={18} color='#333'/>
            </TouchableOpacity>
            <View style={styles.itemText}>
            <Text style={Boolean(item.completed)&&{textDecorationLine:"line-through"}}>{item.title} </Text>
            </View>
            <CheckBox value={item.completed} onChange={() => pressHandler2(item.id)}/>
            </View>
        
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection:'row'
    },
    itemText:{
        marginLeft:10,
        width:160
    }

})
