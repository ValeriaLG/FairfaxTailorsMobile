import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
//import imageBanner from '../assets/images/white-clothing-outerwear-wool-material-button-1033761-pxhere.com.jpg';

export default function App() {
  render() {
    let picture = {
      uri: '../assets/images/white-clothing-outerwear-wool-material-button-1033761-pxhere.com.jpg'
    };
    return (
      <View style={styles.container}>
        <Image source={picture} />
        <Text>Awehjkhjlkhjkhlkjhlkj!</Text>
        <View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
