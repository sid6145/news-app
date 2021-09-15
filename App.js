import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Chip } from 'react-native-paper';
import Header from './Header';

export default function App() {

  const [text, setText] = useState('')
  const [news, setNews] = useState([])

  useEffect(() => {

  },[])

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView horizontal={true} style={styles.category}>
      <Chip style={styles.chip} icon="information" onPress={(e) => console.log(e.target.textContent)}>Technology</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Health</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      <Chip style={styles.chip} icon="information" onPress={() => console.log('Pressed')}>Example Chip</Chip>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fefae0',
  },

  category:{
    height: '80px',
    padding:'20px'
  },

  chip:{
    marginRight: '5px'
  }
});
