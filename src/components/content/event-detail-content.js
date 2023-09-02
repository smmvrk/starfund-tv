import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {B_KEY} from '../../utils/keys';

const EventDetailContent = ({setFocus, onBecameFocused, title}) => {
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

  return (
    <View
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        top: '7vh',
        alignItems: 'center',
      }}
      onFocus={onBecameFocused}>
      <View style={{marginBottom: '10vh'}}>
        <Text style={{color: 'white', fontSize: 45}}>{title}</Text>
      </View>
      <View
        style={{width: '50vw', height: '50vh', backgroundColor: '#D9D9D9'}}
      />

      {/* <View style={{marginBottom: '7vh'}}>
        <Text style={{color: 'white', fontSize: 45}}>Scan QR</Text>
      </View>
      <View
        style={{width: '20vw', height: '30vh', backgroundColor: '#D9D9D9'}}
      />
      <View style={{marginTop: '7vh'}}>
        <Text style={{color: 'white', fontSize: 45}}>with your phone</Text>
      </View> */}
    </View>
  );
};

const EventDetailContentFocusable = withFocusable()(EventDetailContent);

export default EventDetailContentFocusable;
