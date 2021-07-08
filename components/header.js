import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <View>
            <Text style={styles.title}>My Todos</Text> 
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width:400,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height: 80,
        paddingTop: 38,
        backgroundColor: '#958'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});