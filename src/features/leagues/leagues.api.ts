import { baseApi } from "@/services/baseApi";
import { LivescoresResponse } from "./leagues.types";

export const leaguesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPremierLeagueMatches: builder.query<LivescoresResponse, void>({
      query: () => ({
        url: "/livescores/inplay?include=participants;league;round",
        method: "GET",
      }),
      providesTags: ["Matches"],
    }),
  }),
});

export const { useGetPremierLeagueMatchesQuery } = leaguesApi;
