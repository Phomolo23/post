import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Post from './feeling';

export default function App() {
  const [text, setText] = useState('');
  const [posts, setList] = useState([])


  function transform(my_Post) {
    return <Post text={my_Post.text} />
  }


  function sharepost() {
    setList([{ text: text }, ...posts])
    setText('')
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputFields}>

        <TextInput placeholder='share your feelings with friends'
          multiline={true}
          style={styles.input} value={text} onChangeText={setText} />

    
      </View>
      <View style={styles.click}>
        <TouchableOpacity >
          <Button title='share' onPress={sharepost} />
        </TouchableOpacity>

      </View>

      {posts.map(item => transform(item))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',



  },
  inputFields: {
    alignItems: 'flex-start',
    width: '100%',
    padding: 10,
    marginBottom: 20,
    justifyContent: 'center',
    paddingHorizontal: 10




  },
  input: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: '98%',
    padding: 10,
    marginVertical: 2
  },
  click: {
    alignSelf: 'center',
    paddingHorizontal: 18,
    marginTop: 15
  },

  make: {
    borderWidth: 1,
    paddingHorizontal: 10
  }
});
