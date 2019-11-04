import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, Linking, TextInput, Button, Keyboard, KeyboardAvoidingView} from 'react-native';
import {Asset} from 'expo-asset';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import email from 'react-native-email';
const min = Dimensions.get('window');



export class Store extends React.Component {
  static navigationOptions = {
    title: "Store",
  };

  render() {
    return (
      <View>
        <Text>djkfjd</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Store', () => Store);
