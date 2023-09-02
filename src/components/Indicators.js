import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export const IndicatorLeft = () => {
  return (
    <View style={styles.indicatorLeft}>
      {/* <Image source={require('../assets/next.svg')} /> */}
      <Text style={{color: 'white'}}>{'>'}</Text>
    </View>
  );
};

export const IndicatorRight = () => {
  return (
    <View style={styles.indicatorRight}>
      <Image source={require('../assets/next.svg')} />
      <Text style={{color: 'white'}}>{'>'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // ...
  indicatorLeft: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: [{translateY: -50}],
    // Additional styles for the indicator
  },
  indicatorRight: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -50}],
    // Additional styles for the indicator
  },
});
