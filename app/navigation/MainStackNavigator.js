import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ListingScreen, DetailsScreen} from '../screens';

const Stack = createStackNavigator();

const MainStackNavigator = (props) => (
  <Stack.Navigator headerMode="none" initialRouteName={props.routeName}>
    <Stack.Screen name="ListingScreen" component={ListingScreen} />
    <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
  </Stack.Navigator>
);

export default MainStackNavigator;
