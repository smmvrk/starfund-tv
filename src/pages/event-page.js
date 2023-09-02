import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import {useParams} from 'react-router-dom';
import {styles} from '../styles/styles';

import moment from 'moment/moment';
import EventPageBackground from '../assets/events-page/014A2584_DxO 1(darkest).png';
import EventContentFocusable from '../components/content/event-content';
import EventSpatialFocusable from '../components/spatial/event-spatial';
import {
  useGetLatestEventsQuery,
  useGetLivesEventsQuery,
} from '../store/api/event/event.api';

const EventPage = () => {
  const {id} = useParams();

  const startOfDay = moment().startOf('day').unix();
  const endOfDay = moment().endOf('day').unix();
  const {data: latestEvents} = useGetLatestEventsQuery();
  const {data: lives} = useGetLivesEventsQuery({
    to: endOfDay,
    from: startOfDay,
  });
  const {data: replay} = useGetLivesEventsQuery({to: startOfDay});
  console.log('upcoming', lives);
  console.log('replay', replay);
  console.log('events', latestEvents);
  if (!lives) {
    return <Text>Loading...</Text>;
  }
  if (!replay) {
    return <Text>Loading...</Text>;
  }
  if (!latestEvents) {
    return <Text>Loading...</Text>;
  }
  // const event = data
  //   .flatMap(org => org.organization || [])
  //   .find(card => card.id === parseInt(id));
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
          FocusedComponent={EventContentFocusable}
          focusable={false}
          event={event}
        />
      </ImageBackground>
    </View>
  );
};

export default EventPage;
