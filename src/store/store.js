import {combineReducers, configureStore} from '@reduxjs/toolkit';
import moment from 'moment/moment';
import {api} from './api/client';
import {eventLivesApi, eventsApi} from './api/event/event.api';
import {organizationsApi} from './api/organization/organization.api';

const reducer = combineReducers({
  [api.reducerPath]: api.reducer,
  eventsApi: eventsApi.reducer,
  eventLivesApi: eventLivesApi.reducer,
  organizationsApi: organizationsApi.reducer,
});

export const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

// export const getServerSideProps = async () => {
//   const startOfDay = moment().startOf('day').unix();
//   const endOfDay = moment().endOf('day').unix();

//   const {data: latestEvents} = await store.dispatch(eventsApi.initiate());
//   const {data: events} = await store.dispatch(
//     eventLivesApi.initiate({from: endOfDay}),
//   );
//   const {data: lives} = await store.dispatch(
//     eventLivesApi.initiate({to: endOfDay, from: startOfDay}),
//   );
//   const {data: eventsReplay} = await store.dispatch(
//     eventLivesApi.initiate({to: startOfDay}),
//   );
//   const {data: organizations} = await store.dispatch(
//     organizationsApi.initiate(),
//   );

//   return {
//     props: {
//       events: events || null,
//       lives: lives || null,
//       eventsReplay: eventsReplay || null,
//       latestEvents: latestEvents || null,
//       organizations: organizations || null,
//     },
//   };
// };
