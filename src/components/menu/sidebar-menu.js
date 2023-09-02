import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {organizations} from '../../data/data';
import {RETURN_KEY} from '../../utils/keys';

import Close from '../../assets/CloseX.svg';
import MenuLogo from '../../assets/starfund(copy).svg';
import MenuItemFocusable from './menu-item';

const SidebarMenu = ({onPress, setFocus, onBecameFocused}) => {
  const onPressKey = event => {
    if (event.keyCode === RETURN_KEY) {
      setFocus();
    }
  };

  useEffect(() => {
    setFocus();

    window.addEventListener('keydown', onPressKey);

    return () => {
      window.removeEventListener('keydown', onPressKey);
    };
  }, [setFocus]);

  const onCloseSidebar = () => {
    setFocus('CONTENT');
    onPress();
  };

  return (
    <View
      focusKey={'SIDEBAR'}
      style={{
        position: 'absolute',
        height: '100vh',
        width: '25vw',
        left: 0,
        backgroundColor: '#1D1D1D',
        zIndex: 999,
        paddingVertical: '5vh',
      }}
      onFocus={onBecameFocused}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          top: '2vh',
        }}>
        <MenuLogo />
        <TouchableOpacity onPress={onCloseSidebar} focusKey={'SIDEBAR-CLOSE'}>
          <Close />
        </TouchableOpacity>
      </View>
      <View style={{top: '15vh'}}>
        {organizations[0].cards.map(item => (
          <MenuItemFocusable
            key={item.id}
            title={item.title}
            focusKey={`MENU-${item.id}`}
          />
        ))}
      </View>
      <TouchableOpacity style={{position: 'absolute', bottom: '5vh'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 24,
            left: '3vw',
          }}>
          Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SidebarMenu.propTypes = SideBarMenuFocusable;

const SideBarMenuFocusable = withFocusable({trackChildren: true})(SidebarMenu);

export default SideBarMenuFocusable;
