import {api} from '../client';

export const organizationsApi = api.injectEndpoints({
  endpoints: builder => ({
    getOrganizations: builder.query({
      query: () => ({
        method: 'GET',
        url: 'organizations',
      }),
    }),
  }),
});

export const {useGetOrganizationsQuery} = organizationsApi;
