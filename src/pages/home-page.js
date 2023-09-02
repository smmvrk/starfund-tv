/* eslint-disable react/no-multi-comp */
import React, {useEffect, useState} from 'react';
import {ImageBackground, View} from 'react-native';
import {styles} from '../styles/styles';

import HomePageBackground from '../assets/home-page/design 1.png';
import HomeSpatialFocusable from '../components/spatial/home-spatial';
import HelloUserPage from './hello-page';

const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <HelloUserPage />
  ) : (
    <View style={styles.app}>
      <ImageBackground
        source={{uri: HomePageBackground}}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <HomeSpatialFocusable focusable={false} />
      </ImageBackground>
    </View>
  );
};

export default HomePage;
