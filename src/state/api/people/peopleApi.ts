import { webApi } from '@/state/api/apiPaths';
import generalApi from '@/state/api/initialApi';
import { GetPeopleResponse } from '@/state/api/people/peopleApi.types';

export const peopleApi = generalApi.injectEndpoints({
  endpoints: (builder) => ({
    getPeople: builder.query<GetPeopleResponse, number>({
      query: (page) => {
        return {
          url: `${webApi.starWars.getPeopleUrl}?page=${page}`,
        };
      },
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApi;
