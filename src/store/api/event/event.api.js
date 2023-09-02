import {api} from '../client';

export const eventsApi = api.injectEndpoints({
  endpoints: builder => ({
    getLatestEventsSSR: builder.query({
      query: () => ({
        method: 'GET', // Добавляем метод запроса
        url: 'events/latest',
      }),
    }),
  }),
});

export const eventLivesApi = api.injectEndpoints({
  endpoints: builder => ({
    getLivesEvents: builder.query({
      query: ({to, from, organization_slug}) => ({
        method: 'GET',
        url: 'ppvs',
        params: {
          to,
          from,
          organization_slug,
        },
      }),
    }),
  }),
});

export const eventsApiSlice = api.injectEndpoints({
  endpoints: build => ({
    getLatestEvents: build.query({
      query: () => ({
        url: 'events/latest',
      }),
    }),
    getLives: build.query({
      query: ({to, from, organization_slug}) => ({
        url: 'ppvs',
        params: {
          to,
          from,
          organization_slug,
        },
      }),
    }),
  }),
});

export const {useGetLatestEventsSSRQuery} = eventsApi;
export const {useGetLivesEventsQuery} = eventLivesApi;
export const {useGetLatestEventsQuery, useGetLivesQuery} = eventsApiSlice;
