import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, Linking, TextInput, Button, Keyboard, KeyboardAvoidingView} from 'react-native';
import {Asset} from 'expo-asset';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import email from 'react-native-email';
import {MainScreen} from './Home.js';
import {Products} from './Products.js';
const min = Dimensions.get('window');

const MainNavigator = createStackNavigator({
  Home: { screen: MainScreen },
  Products: { screen: Products },
});



const App = createAppContainer(MainNavigator);

export default App;
