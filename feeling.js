import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import React from 'react'
import { useState } from 'react';


export default function Post({ text }) {
const[count, setcount] = useState(0);
       const onPres=()=> setcount(prevcount =prevcount+1)

    return (
        <View style={styles.container}>
            <View style={styles.textocc}>
                <Text>{text}</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.reactocc}>
                    <Text>{count} likes</Text>
                    <SimpleLineIcons name="like" onPress ={onPres} size={24} color="blue" /><Text style={styles.styler}> </Text>
                    
                </View>
            </TouchableOpacity>

        </View>

        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        borderColor: 'black',
        padding: 10,
        marginBottom: 5,

    },

    textocc: {
        padding: 10,
        borderWidth: 1,
        height: 50,
        width: '90%',
        marginVertical: 2

    },

    reactocc: {
        flexDirection: 'row',
        padding: 10,
        borderWidth: 1,
        fontWeight: 'bold',
        paddingHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        backgroundColor: 'blue',
        justifyContent: 'center',
        height: 20
     },
     
     styler: {
        fontSize: 16,
        fontWeight: 'bold',
        justifyContent: 'space-around',


    }
})
