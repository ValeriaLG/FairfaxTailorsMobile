import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, Linking, TextInput, Button, Keyboard, KeyboardAvoidingView} from 'react-native';
import {Asset} from 'expo-asset';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import email from 'react-native-email';
import {MainScreen} from './Home.js';
import {Store} from './Store.js';
const min = Dimensions.get('window');

const MainNavigator = createStackNavigator({
  Home: { screen: MainScreen },
  Store: { screen: Store },
});



const App = createAppContainer(MainNavigator);

export default App;
