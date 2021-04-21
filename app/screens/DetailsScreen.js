import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
const DetailsScreen = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: '#F7F9FD'}}>
      <SafeAreaView />
      <View style={{alignItems: 'center', marginHorizontal: '5%'}}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#000000',
            marginTop: '2%',
          }}>
          Song Details
        </Text>
        <Image
          source={{uri: props.route.params.item.artworkUrl100}}
          style={{height: 100, width: 100, borderRadius: 10, marginTop: '5%'}}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: '500',
            color: '#000000',
            marginTop: '5%',
          }}>
          Artist Name :
          {props.route.params.item.artistName
            ? props.route.params.item.artistName
            : '-'}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#000000',
            marginTop: '2%',
          }}>
          Collection Name :
          {props.route.params.item.collectionName
            ? props.route.params.item.collectionName
            : '-'}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#000000',
            marginTop: '2%',
          }}>
          Primary Genre Name :
          {props.route.params.item.primaryGenreName
            ? props.route.params.item.primaryGenreName
            : '-'}
        </Text>
      </View>
      <SafeAreaView />
    </View>
  );
};
export default DetailsScreen;
