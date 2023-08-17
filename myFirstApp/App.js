import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AboutUs from './component/AboutUs';
import { useState } from 'react';

export default function App() {
  const   [name, setName] = useState('San San')
  return (
    // <View style={styles.container}>
    //   <Text>1st ReactApp</Text>
    //   <StatusBar style="auto" />
    // </View>

    <AboutUs name={name}>  </AboutUs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
