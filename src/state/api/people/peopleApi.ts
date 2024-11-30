import { webApi } from "@/state/api/apiPaths";
import generalApi from "@/state/api/initialApi";
import {
  GetPeopleResponse,
  GetPeopleResponseWithEntityId,
} from "@/state/api/people/peopleApi.types";
import { parseIdFromUrl } from "@/helpers/parseIdFromUrl";

export const peopleApi = generalApi.injectEndpoints({
  endpoints: (builder) => ({
    getPeople: builder.query<GetPeopleResponseWithEntityId, number>({
      query: (page) => {
        return {
          url: `${webApi.starWars.getPeopleUrl}?page=${page}`,
        };
      },
      transformResponse: (res: GetPeopleResponse) => {
        const transformedResults = res.results.map((elem) => ({
          ...elem,
          id: parseIdFromUrl(elem.url),
        }));

        return { ...res, results: transformedResults };
      },
    }),
  }),
});

export const { useGetPeopleQuery } = peopleApi;
