import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {B_KEY, KEY_ENTER} from '../../utils/keys';

import EventCategoriesFocusable from '../categories/event-categories';

const EventContent = ({setFocus, onBecameFocused, event}) => {
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
        flex: 1,
        marginLeft: 100,
        display: 'flex',
        justifyContent: 'center',
      }}
      onFocus={onBecameFocused}>
      <View style={{flex: 1, top: -50, maxHeight: '50vh'}}>
        <EventCategoriesFocusable
          focusKey={'CATEGORIES'}
          // onCardPress={onCardPress}
          blockNavigationOut={blockNavigationOut}
          event={event}
        />
      </View>
    </View>
  );
};

const EventContentFocusable = withFocusable()(EventContent);

export default EventContentFocusable;
