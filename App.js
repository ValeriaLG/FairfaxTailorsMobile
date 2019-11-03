import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, Linking} from 'react-native';
import {Asset} from 'expo-asset';
import Constants from 'expo-constants';
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
    let pictures = {
      bannerUri: 'https://get.pxhere.com/photo/writing-hand-leather-yarn-thread-sew-close-up-glasses-schneider-scissors-tailoring-haberdashery-831331.jpg',
      sewingServices1Uri: 'https://c.pxhere.com/photos/15/f1/sew_sewing_machine_fabric_handarbeiten_diy_hand_labor_zig_zag_tailoring-1170573.jpg!d',
      tapeMeasureServices2Uri: 'https://c.pxhere.com/photos/c7/e7/tailor\'s_chalk_sew_n_hutensilien_handarbeiten_meter_chalk_tailoring_craft-775049.jpg!d',
      tailoringServices3Uri: 'https://get.pxhere.com/photo/white-clothing-outerwear-wool-material-button-fabric-textile-textiles-fluid-systems-1033761.jpg'
    }
    return (
      <SafeAreaView style={styles.overallContainers}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.headerHome}>Fairfax Tailors</Text>
          <Image source={{uri: pictures.bannerUri}} style={styles.imageBanner}/>
          <View style={styles.tightenedArea}>
            <Text style={styles.paragraph}>Fairfax Tailors is a small tailor shop located in Fair Oaks Mall in Northern Virginia.  We offer tailoring and alterations for all kinds of men’s, women’s, and children’s clothes.  In addition to tailoring, we also offer dry cleaning along with clothing repair services such as reweaving. Please call, email or visit our store with any further questions.</Text>
            <Text style={styles.headerServices}>Services We Offer</Text>
            <View style={styles.flexContainer}>
            {/*do flexbox for images for services*/}
              <View style={styles.flexItem}>
                <Image source={{uri: pictures.sewingServices1Uri}} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  Our skilled team of tailors can tailor your clothes to your specification for a better fit.
                </Text>
              </View>
              <View style={styles.flexItem}>
                <Image source={{uri: pictures.tapeMeasureServices2Uri}} style={styles.servicesImage}/>
                <Text style={styles.flexItemText}>
                  Our staff can provide detailed and accurate measurements and fittings to ensure that your clothing is altered to your satisfaction.
                </Text>
              </View>
              <View style={styles.flexItem}>
                <Image source={{uri: pictures.tailoringServices3Uri}} style={styles.servicesImage}/>
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
                <Text style={styles.flexItemText}>
                  <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.facebook.com/pages/Fairfax-Tailors/191178054564294?rf=1630599570531888')}>
                    FaceBook
                  </Text>
                  {"\n"}
                  <Text style={styles.hyperlink} onPress={() => Linking.openURL('https://www.yelp.com/biz/fairfax-tailors-fairfax')}>
                    Yelp
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
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
  tightenedArea: {
    marginHorizontal: 20
  },
  imageBanner: {
    width: min.width,
    height: 300
  },
  paragraph: {
    textAlign: 'center',
    paddingTop: min.height * 0.02
  },
  hyperlink: {

  },
  flexContainer: {
    flex: 1,
    alignItems: 'center'
  },
  servicesImage: {
    width: 300,
    height: 300
  },
  flexItemText: {
    paddingTop: min.height * 0.009,
    textAlign: 'center',
    fontSize: 15
  },
  flexItem: {
    paddingTop: min.height * 0.04,
    flex: 1,
    alignItems: 'center',
    width: 300
  },
  headerHome: {
    fontSize: 40,
    textAlign: 'center',
    paddingTop: min.height * 0.05
  },
  headerServices: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: min.height * 0.02
  },
  headerMisc: {
    fontSize: 25,
    textAlign: 'center',
    paddingTop: min.height * 0.02
  },
  headerMinor: {
    fontSize: 20,
    textAlign: 'center'
  }
});
