import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../styles/styles';

import {useNavigate} from 'react-router-dom';
import {KEY_ENTER} from '../categories/event-categories';

const OrganizationCard = ({focused, item}) => {
  const style = {
    background: 'linear-gradient(#272727, #121212)',
    opacity: focused ? 1 : 0.5,
    width: focused ? '40vh' : '35vh',
    height: focused ? '50vh' : '45vh',
    overflow: 'hidden',
    borderStyle: 'solid',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderImageSource: focused
      ? 'radial-gradient(ellipse at top left, white, transparent 65%)'
      : 'radial-gradient(circle at top left, #606060, transparent 50%)',
    borderImageSlice: 1,
  };

  const bottomLine = {
    width: focused ? '12vh' : '',
    backgroundColor: focused ? '#FFFFFF' : '',
    height: focused ? '0.6vh' : '',
    position: focused ? 'absolute' : '',
    left: focused ? '15vh' : '',
    bottom: 5,
    boxShadow: '0 -15px 45px rgba(255, 255, 255, 1)',
  };

  const navigate = useNavigate();

  const handlePress = event => {
    if (event.keyCode === KEY_ENTER) {
      navigate(`/event/${encodeURIComponent(item.id)}`);
    }
  };

  useEffect(() => {
    if (focused) {
      window.addEventListener('keydown', handlePress);
    } else {
      window.removeEventListener('keydown', handlePress);
    }

    return () => {
      window.removeEventListener('keydown', handlePress);
    };
  }, [focused]);

  return (
    <View style={{justifyContent: 'center'}}>
      <TouchableOpacity key={item.id} onPress={handlePress}>
        <View style={[styles.cardWrapper, style]}>
          <Image
            source={{uri: item.images[0].conversions.thumb}}
            resizeMode="center"
            style={{
              flex: 1,
            }}
          />
          <View
            style={{
              height: 120,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '500',
                fontSize: 24,
                position: 'absolute',
                bottom: 30,
              }}>
              {item.name}
            </Text>
          </View>
        </View>
        <View style={bottomLine} />
      </TouchableOpacity>
    </View>
  );
};

// OrganizationCard.propTypes = OrganizationCardPropTypes;

const OrganizationCardFocusable = withFocusable()(OrganizationCard);

export default OrganizationCardFocusable;
