# FairfaxTailorsMobile
A mobile app to showcase the products of Fairfax Tailors.

## Developing

This app runs on port 19002 if used with Expo. It will build the app before deploying it live on your device. Expo has the benefit of not requiring your external device to be plugged in while running it with react native requires either the virtual image to be present or your external device to be plugged in.

For both cases you must **navigate to the FairfaxTailors folder through command line.**

### React Native Method
#### Android Virtual Device
*This is assuming that you already have Android Studio, the jdk, and node.js installed*
1. Go to the Android Studio application
2. Click the AVD Manager button on the top ribbon
3. Click play on one of the virtual devices or click "Create Virtual Device..." and follow the prompts
4. Open your custom app on your virtual device
5. In command line type "**react-native run-android**"

### Expo Method

#### Prerequisites
1. [Download Node.js](https://nodejs.org/en/)
2. Get the command line tool by running: *npm install expo-cli --global*
3. Download the expo app on your android or iphone

More information about how to install the expo client can be [found here](https://docs.expo.io/versions/latest/get-started/installation/)

#### How To Run
To run the application on your phone without plugging it in: 
1. Type "**expo start**" on the command line on your computer in the root folder of the app
3. Scan the qr code with your mobile device (within the expo app if android and within the camera app if iPhone)
