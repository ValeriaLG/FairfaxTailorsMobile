# FairfaxTailorsMobile
A mobile app to showcase the products of Fairfax Tailors. A demo can be viewed here on the [Fairfax Demo Environment](https://expo.io/@fairfaxt/FairfaxTailors).

## Developing

This app runs on port 19002 if used with Expo. It will build the app before deploying it live on your device. Expo has the benefit of not requiring your external device to be plugged in while running it with react native requires either the virtual image to be present or your external device to be plugged in.

### Prerequisites
1. [Download Node.js](https://nodejs.org/en/)
2. Get the command line tool by running: *npm install expo-cli --global*
3. Download the expo app on your android or iphone

More information about how to install the expo client can be [found here](https://docs.expo.io/versions/latest/get-started/installation/)

### How To Run
To run the application on your phone without plugging it in: 
1. Navigate to the root FairfaxTailors folder through command line
2. Type "**expo start**" on the command line on your computer
3. Scan the qr code with your mobile device (within the expo app if android and within the camera app if iPhone)

### How To Publish
To be able to demo the application remotely without needing a computer or having it in the app store: 
1. Navigate to the root FairfaxTailors folder through command line
2. Type "**expo start**" in the command line window
3. In a new command line window, type "**expo publish**"
