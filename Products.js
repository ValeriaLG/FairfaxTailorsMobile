import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, Linking, TextInput, Button, Keyboard, KeyboardAvoidingView} from 'react-native';
import {Asset} from 'expo-asset';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {styles} from './globalStyleSheet.js';
import email from 'react-native-email';
const min = Dimensions.get('window');



export class Products extends React.Component {
  static navigationOptions = {
    title: "Products",
  };

  render() {
    //backup uri for the images
    let pictures = {
      bannerUri: 'https://get.pxhere.com/photo/writing-hand-leather-yarn-thread-sew-close-up-glasses-schneider-scissors-tailoring-haberdashery-831331.jpg',
      whiteShirtUri: 'https://live.staticflickr.com/2856/9383173050_dfb2bd0a2c_b.jpg',
      womenSuitUri: 'https://calvinklein.scene7.com/is/image/CalvinKlein/womens-apparel_suit-sets_black-suit_main?wid=257&hei=338&fmt=jpeg&qlt=85%2C0&resMode=sharp2&op_usm=0.9%2C1.0%2C8%2C0&iccEmbed=0',
      mensSuitUri: 'https://images.josbank.com/is/image/JosBank/3EH9_06_EXECUTIVE_CHARCOAL_MAIN?hei=432&wid=382',
      overCoatUri: 'https://cdn.shopify.com/s/files/1/0635/5365/products/mainpng_1024x1024@2x.png?v=1517844616'
    }



    return (
      <SafeAreaView style={styles.containers}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.headerHome}>Fairfax Tailors</Text>
          <Image source={require('./assets/images/mainBanner.jpg')} style={styles.imageBanner}/>
          <View style={styles.tightenedArea}>
            <Text style={styles.headerServices}>Our Products</Text>
            <View style={styles.flexContainer}>
              <View style={styles.flexItem}>
                <Image source={require('./assets/images/ProductPicsClient/whiteBlouse.jpg')} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  Rock the office look with this versatile, button-up dress shirt that goes great with any suit!
                </Text>
              </View>
              <View style={styles.flexItem}>
                <Image source={require('./assets/images/ProductPicsClient/womensSuit.jpg')} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  Create an office-ready look with a tailored essential styled with a blazer and matching straight-leg pants.
                </Text>
              </View>
              <View style={styles.flexItem}>
                <Image source={require('./assets/images/ProductPicsClient/Overcoat.png')} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  Be prepared for the winter weather with this overcoat, designed with a fit suited for your body and a timeless notched lapel.
                </Text>
              </View>
              <View style={styles.flexItem}>
                <Image source={require('./assets/images/ProductPicsClient/menssuit.jpg')} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  A signature 2-piece stripped suit set with a sleek notch collared jacket and pants that are perfect for a day at the office.
                </Text>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent('Products', () => Products);
