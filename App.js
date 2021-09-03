/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { Constants } from 'react-native-unimodules';
import * as tf from '@tensorflow/tfjs';
// import '@tensorflow/tfjs-react-native';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
// import { TFImageClassifier } from './components/TFImageClassifier';

const App = () => {
  const initialState = {
    isTfReady: false,
  }
  const [state, setState] = useState(initialState)

  // useEffect(() => console.log(Constants.systemFonts), [])

  useEffect(() => {
    // Wait for tf to be ready.
    console.log('waiting for tf...')
    tf.ready().then(() => {
      // Signal to the app that tensorflow.js can now be used.
      setState({
        isTfReady: true,
      });
      console.log('tf is ready')
    });
  }, [])

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Text>placeholder</Text>
        <Text>tensorflow {
          state.isTfReady ? "ready" : "loading..."
        }</Text>
        {/* <TFImageClassifier/> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
