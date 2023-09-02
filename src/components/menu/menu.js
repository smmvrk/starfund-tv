import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {MenuPropTypes} from '../../utils/types';

import Bars from '../../assets/events-page/Bars.svg';
import Logo from '../../assets/events-page/Logo.svg';

const Menu = ({event, onBecameFocused, focused, onPress}) => {
  return (
    <View
      onFocus={onBecameFocused}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 100,
        marginTop: 100,
      }}>
      <View style={focused ? {borderWidth: 1, borderColor: 'white'} : ''}>
        <TouchableOpacity focusKey={'MENU'} onPress={onPress}>
          <Bars />
        </TouchableOpacity>
      </View>
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontWeight: '700',
          marginLeft: 38,
          marginRight: 30,
        }}>
        {event.name.toUpperCase()}
      </Text>
      <Logo />
    </View>
  );
};

Menu.propTypes = MenuPropTypes;

const MenuFocusable = withFocusable({
  trackChildren: true,
})(Menu);

export default MenuFocusable;
