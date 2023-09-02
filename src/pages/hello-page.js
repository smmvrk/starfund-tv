import React from 'react';
import {Text, View} from 'react-native';

const HelloUserPage = () => {
  return (
    <View
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white', fontSize: 60}}>Hi, Firdavs</Text>
    </View>
  );
};

export default HelloUserPage;
