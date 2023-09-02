import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from '../../styles/styles';
import {MenuItemPropTypes} from '../../utils/types';

const MenuItem = ({title, focused}) => {
  return (
    // <Link key={id} to={`/event/${encodeURIComponent(id)}`}>
    <TouchableOpacity
      style={[styles.menuItem, focused ? styles.menuItemFocus : null]}>
      <Text
        style={[
          styles.menuItemText,
          focused ? styles.menuItemTextFocus : styles.menuItemText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
    // </Link>
  );
};

MenuItem.propTypes = MenuItemPropTypes;

const MenuItemFocusable = withFocusable()(MenuItem);

export default MenuItemFocusable;
