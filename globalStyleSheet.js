import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import {Asset} from 'expo-asset';
const min = Dimensions.get('window');

'use strict';


export const styles =  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  formContainerUnopen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  },
  formContainerOpen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: min.height * 0.5
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  inputBig: {
    width: 200,
    textAlignVertical: 'top',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
  },
  storeBtn: {
    width: 350,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
    paddingTop: min.height * 0.02,
    paddingBottom: min.height * 0.02
  },
  flexContainer: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: min.height * 0.02
  },
  servicesImage: {
    width: 300,
    height: 300
  },
  iconsImage: {
    width: 50,
    height: 50
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
  iconsArea: {
    paddingTop: min.height * 0.02,
    flex: 1,
    alignItems: 'center',
    width: 300,
    flexDirection: 'row',
    justifyContent: 'center'
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
