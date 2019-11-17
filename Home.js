import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, Linking, TextInput, Button, Keyboard, KeyboardAvoidingView, TouchableHighlight} from 'react-native';
import {Asset} from 'expo-asset';
import Constants from 'expo-constants';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import email from 'react-native-email';
import {Products} from './Products.js';
import {styles} from './globalStyleSheet.js';
const min = Dimensions.get('window');


export class MainScreen extends React.Component {
  state={
    keyboardBottom: false
  }
  static navigationOptions = {
    title: "Home",
  };

  scrollToBottom = () =>{
    this.setState({keyboardBottom: !this.state.keyboardBottom})
  }

  render(){
    //backup uri for the images
    let pictures = {
      bannerUri: 'https://get.pxhere.com/photo/writing-hand-leather-yarn-thread-sew-close-up-glasses-schneider-scissors-tailoring-haberdashery-831331.jpg',
      sewingServices1Uri: 'https://c.pxhere.com/photos/15/f1/sew_sewing_machine_fabric_handarbeiten_diy_hand_labor_zig_zag_tailoring-1170573.jpg!d',
      tapeMeasureServices2Uri: 'https://c.pxhere.com/photos/c7/e7/tailor\'s_chalk_sew_n_hutensilien_handarbeiten_meter_chalk_tailoring_craft-775049.jpg!d',
      tailoringServices3Uri: 'https://get.pxhere.com/photo/white-clothing-outerwear-wool-material-button-fabric-textile-textiles-fluid-systems-1033761.jpg',
      facebookIconUri: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Facebook_icon.jpg',
      yelpIconUri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Yelp.svg/384px-Yelp.svg.png'
    }

    const { navigate } = this.props.navigation;

    return (
      <SafeAreaView style={styles.containers}>
        <ScrollView style={styles.scrollView}  ref='_scrollView' onContentSizeChange={() => { (this.state.keyboardBottom)? this.refs._scrollView.scrollTo({y: min.height * 3.2, animated: true}) : null }}>
          <Text style={styles.headerHome}>Fairfax Tailors</Text>
          <Image source={require('./assets/images/mainBanner.jpg')} style={styles.imageBanner}/>
          <View style={styles.tightenedArea}>
            <Text style={styles.paragraph}>Fairfax Tailors is a small tailor shop located in Fair Oaks Mall in Northern Virginia.  We offer tailoring and alterations for all kinds of men’s, women’s, and children’s clothes.  In addition to tailoring, we also offer dry cleaning along with clothing repair services such as reweaving. Please call, email or visit our store with any further questions.</Text>

            <View style={styles.storeBtn}>
              <Button
                title={'View Our Products'}
                color='#808080'
                onPress={() => this.props.navigation.navigate('Products')}
              />
            </View>


            <Text style={styles.headerServices}>Services We Offer</Text>
            <View style={styles.flexContainer}>
              <View style={styles.flexItem}>
                <Image source={require('./assets/images/sewingMachine.jpg')} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  Our skilled team of tailors can tailor your clothes to your specification for a better fit.
                </Text>
              </View>
              <View style={styles.flexItem}>
                <Image source={require('./assets/images/measureTape.jpg')} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  Our staff can provide detailed and accurate measurements and fittings to ensure that your clothing is altered to your satisfaction.
                </Text>
              </View>
              <View style={styles.flexItem}>
                <Image source={require('./assets/images/clothingSuit.jpg')} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  We are able to measure you and provide advice on fabric selection, garment options, and garment care.
                </Text>
              </View>
            </View>
            <Text style={styles.headerMisc}>Hours, Location & Social Media</Text>
            <View style={styles.flexContainer}>
              <View style={styles.flexItem}>
                <Text style={styles.headerMinor}>
                  Contact
                </Text>
                <Text style={styles.flexItemText}>
                  Telephone: 703-385-1168{"\n"}
                  Email: fairfaxtailors1@gmail.com
                </Text>
              </View>

              <View style={styles.flexItem}>
                <Text style={styles.headerMinor}>
                  Location
                </Text>
                <Text style={styles.flexItemText}>
                  11841L Fair Oaks Mall Fairfax, VA 22033{"\n"}
                  Inside the Mall: On the lower level next to Macy’s
                </Text>
              </View>

              <View style={styles.flexItem}>
                <Text style={styles.headerMinor}>
                  Hours of Operation
                </Text>
                <Text style={styles.flexItemText}>
                Sunday 11AM–6PM{"\n"}
                Monday 10AM–9:00PM{"\n"}
                Tuesday 10AM–9:00PM{"\n"}
                Wednesday 10AM–9:00PM{"\n"}
                Thursday 10AM–9:00PM{"\n"}
                Friday 10AM–9:00PM{"\n"}
                Saturday 10AM–9:00PM
                </Text>
              </View>

              <View style={styles.flexItem}>
                <Text style={styles.headerMinor}>
                  Social Media
                </Text>
                <View style={styles.iconsArea}>
                    <TouchableHighlight onPress={() => Linking.openURL('https://www.facebook.com/pages/Fairfax-Tailors/191178054564294?rf=1630599570531888')}>
                      <Image source={require('./assets/images/socialMedia/Facebook_icon.jpg')} style={styles.iconsImage}/>
                    </TouchableHighlight>
                </View>
              </View>
            </View>

            <FeedbackForm scrollDown={() => this.scrollToBottom()}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

class FeedbackForm extends React.Component {

    state={
      name: '',
      email: '',
      message: '',
      keyboardShowed: false
    }


  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      this._keyboardDidShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
     'keyboardDidHide',
     this._keyboardDidHide,
   );
  }

  componentWillUnmount() {
   this.keyboardDidShowListener.remove();
   this.keyboardDidHideListener.remove();
 }

  _keyboardDidShow = () => {
  this.setState({keyboardShowed: true}, () => this.props.scrollDown());

}

_keyboardDidHide = () => {
  this.setState({keyboardShowed: false}, () => this.props.scrollDown());
}

  submitFeedback = () =>{
    const to = ['FairfaxTailorsFeedback@outlook.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            subject: 'Feedback from ' + this.state.name,
            body: this.state.message + " \nEmail at: " + this.state.email
        }).catch(console.error)

  }

  render() {
    return (
        <View style={this.state.keyboardShowed ? styles.formContainerOpen: styles.formContainerUnopen}>
          <Text style={styles.headerMisc}>Not sure if we're the best fit?</Text>
          <Text style={styles.paragraph}>We love to hear from customers, both past and present. Send us a message with details on your request, or any questions you have on our services. We will get back to you as soon as possible with an answer.</Text>
          <TextInput
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
            placeholder={'Name'}
            style={styles.input}
          />
          <TextInput
            value={this.state.email}
            onChangeText={(email) => this.setState({ email })}
            placeholder={'Email'}
            style={styles.input}
          />
          <TextInput
            multiline
            numberOfLines={5}
            value={this.state.message}
            onChangeText={(message) => this.setState({ message })}
            placeholder={'Your message'}
            style={styles.inputBig}
          />

          <Button
            title={'Submit'}
            style={styles.input}
            color='#808080'
            onPress={this.submitFeedback.bind(this)}
          />
        </View>
    );
  }
}


AppRegistry.registerComponent('Home', () => Home);
