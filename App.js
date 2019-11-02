import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import {Asset} from 'expo-asset';
const min = Dimensions.get('window');
// var imageBanner = require('../assets/images/white-clothing-outerwear-wool-material-button-1033761-pxhere.com.jpg');

export default class HelloWorldApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainScreen />
      </View>
    );
  }
}

class MainScreen extends React.Component {
  render() {
    let picture = {
      uri: 'https://get.pxhere.com/photo/white-clothing-outerwear-wool-material-button-fabric-textile-textiles-fluid-systems-1033761.jpg'
    }
    return (
      <View>
        <Image source={{uri: picture.uri}} style={styles.imageBanner}/>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Fairfax Tailors</Text>
        <Text style={styles.paragraph}>Fairfax Tailors is a small tailor shop located in Fair Oaks Mall in Northern Virginia.  We offer tailoring and alterations for all kinds of men’s, women’s, and children’s clothes.  In addition to tailoring, we also offer dry cleaning along with clothing repair services such as reweaving. Please call, email or visit our store with any further questions.</Text>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Services We Offer</Text>
        <View style={styles.servicesOffer}>
        {/*do flexbox for images for services*/}
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageBanner: {
    width: min.width,
    height: 300
  },
  paragraph: {
    textAlign: 'center'
  },
  servicesOffer: {
    flex: 1
  }
});
