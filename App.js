/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Posts from './screens/posts/Posts';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Posts />
      </SafeAreaView>
    </>
  );
};

export default App;
