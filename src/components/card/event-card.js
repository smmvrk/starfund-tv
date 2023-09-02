import {withFocusable} from '@noriginmedia/react-spatial-navigation';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Link} from 'react-router-dom';
import {styles} from '../../styles/styles';
import {CardPropTypes} from '../../utils/types';

import Play from '../../assets/events-page/Vector.svg';

const EventCard = ({
  color,
  onPress,
  focused,
  title,
  date,
  buttonTitle,
  img,
  id,
}) => {
  const style = {
    backgroundColor: 'rgba(29, 29, 29, 0.9)',
    opacity: focused ? 1 : 0.5,
    width: focused ? '100vh' : '70vh',
    height: focused ? '30vh' : '25vh',
    borderRadius: 25,
    overflow: 'hidden',
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 10,
      }}>
      <Link
        to={`/event-details/${encodeURIComponent(id)}/${encodeURIComponent(
          title,
        )}`}
        style={{textDecoration: 'none'}}>
        <View style={[styles.eventCardWrapper, style]}>
          <Image
            source={{uri: img}}
            style={{height: '100%', width: '50%', left: -50}}
            resizeMode="contain"
          />
          <View style={{width: '50%', height: '100%'}}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingVertical: 45,
              }}>
              <Text style={{color: 'white', fontSize: 30, fontWeight: '700'}}>
                {title}
              </Text>
              <Text style={{fontSize: 20, color: 'white', paddingTop: 5}}>
                {date}
              </Text>
              <View style={{position: 'absolute', bottom: focused ? -50 : -35}}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Play />
                  <Text
                    style={{
                      color: 'white',
                      marginHorizontal: 20,
                      fontSize: 20,
                      fontWeight: '600',
                    }}>
                    {buttonTitle}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Link>
    </View>
  );
};

EventCard.propTypes = CardPropTypes;

const EventCardFocusable = withFocusable()(EventCard);

export default EventCardFocusable;
