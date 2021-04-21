/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './app/navigation/MainStackNavigator';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <MainStackNavigator routeName={'ListingScreen'} />
      </NavigationContainer>
    </View>
  );
};
export default App;
