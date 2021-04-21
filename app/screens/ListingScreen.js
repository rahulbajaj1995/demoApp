import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  Pressable,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';

const ListingScreen = (props) => {
  const [showindicator, setShowindicator] = useState(true);
  const [songList, setSongList] = useState('');

  useEffect(() => {
    apiHandler();
  }, []);

  apiHandler = async () => {
    fetch('https://itunes.apple.com/search?term=Michael+jackson')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (__DEV__) {
          console.log(`[Network Success]: ${JSON.stringify(data)}`);
        }
        if (data.results && data.results.length > 0) {
          setShowindicator(false);
          setSongList(data.results);
        }
      })
      .catch((error) => {
        console.log(error);
        alert(error ? error.message : 'Something went wrong..!!');
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F7F9FD'}}>
      <SafeAreaView />
      {songList != '' ? (
        <FlatList
          data={songList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <Pressable
              onPress={() =>
                props.navigation.navigate('DetailsScreen', {item: item})
              }
              style={{
                margin: '1%',
                backgroundColor: '#ffffff',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                minHeight: 100,
                padding: '2%',
                borderRadius: 10,
                borderColor: '#0000001A',
              }}>
              <View style={{flex: 1}}>
                <Image
                  source={{uri: item.artworkUrl60}}
                  style={{height: 60, width: 60, borderRadius: 10}}
                />
              </View>
              <View style={{flex: 4, justifyContent: 'center'}}>
                <Text
                  style={{fontSize: 14, fontWeight: '500', color: '#000000'}}>
                  {item.artistName}
                </Text>
                <Text style={{fontSize: 12, color: '#000000', marginTop: '2%'}}>
                  {item.collectionName}
                </Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <ActivityIndicator
          animating={showindicator}
          color="#999999"
          size="large"
        />
      )}
      <SafeAreaView />
    </View>
  );
};
export default ListingScreen;
