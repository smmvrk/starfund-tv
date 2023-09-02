import React from 'react';
import {ImageBackground, View} from 'react-native';
import {useParams} from 'react-router-dom';
import {organizations} from '../data/data';
import {styles} from '../styles/styles';

import EventPageBackground from '../assets/events-page/014A2584_DxO 1(darkest).png';
import EventDetailContentFocusable from '../components/content/event-detail-content';
import EventSpatialFocusable from '../components/spatial/event-spatial';

const EventDetailsPage = () => {
  const {id, title} = useParams();
  const event = organizations
    .flatMap(org => org.cards || [])
    .find(card => card.id === parseInt(id));
  return (
    <View style={styles.app}>
      <ImageBackground
        source={{uri: EventPageBackground}}
        style={{
          flex: 1,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <EventSpatialFocusable
          FocusedComponent={EventDetailContentFocusable}
          focusable={false}
          event={event}
          title={title}
        />
      </ImageBackground>
    </View>
  );
};

export default EventDetailsPage;
