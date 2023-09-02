import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {B_KEY} from '../../utils/keys';

import Logo from '../../assets/starfund.svg';
import {useGetLatestEventsSSRQuery} from '../../store/api/event/event.api';
import HomeCategoriesFocusable from '../categories/home-categories';

const HomeContent = ({setFocus, onBecameFocused}) => {
  const [currentCard, setCurrentCard] = useState(null);
  const [blockNavigationOut, setBlockNavigationOut] = useState(false);

  const onPressKey = event => {
    if (event.keyCode === B_KEY) {
      console.warn(
        `blockNavigationOut: ${!blockNavigationOut}. Press B to ${
          blockNavigationOut ? 'block' : 'unblock '
        }`,
      );
      setBlockNavigationOut(prevBlockNavigationOut => !prevBlockNavigationOut);
    }
  };

  useEffect(() => {
    setFocus();

    window.addEventListener('keydown', onPressKey);

    return () => {
      window.removeEventListener('keydown', onPressKey);
    };
  }, [setFocus]);

  // const onCardPress = (cardProps, {pressedKeys} = {}) => {
  //   if (pressedKeys && pressedKeys[KEY_ENTER] > 1) {
  //     return;
  //   }
  //   setCurrentCard(cardProps);
  // };

  return (
    <View
      style={{
        maxHeight: '90vh',
        width: '100%',
        marginVertical: 100,
        display: 'flex',
        justifyContent: 'center',
      }}
      onFocus={onBecameFocused}>
      <Logo />
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontWeight: '700',
          marginTop: 60,
        }}>
        Pick your organization
      </Text>
      <HomeCategoriesFocusable
        focusKey={'CATEGORIES'}
        // onCardPress={onCardPress}
        blockNavigationOut={blockNavigationOut}
      />
    </View>
  );
};

const HomeContentFocusable = withFocusable()(HomeContent);
export default HomeContentFocusable;
