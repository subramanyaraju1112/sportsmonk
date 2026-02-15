"use client";

import LeagueCard from "./LeagueCard"
import { leagues } from "@/features/leagues/constants/leagues";
import { useGetPremierLeagueMatchesQuery } from "@/features/leagues/leagues.api";

const Leagues: React.FC = () => {
    const { data } = useGetPremierLeagueMatchesQuery();
    return (
        <div className="max-w-7xl mx-auto flex flex-col gap-5">
            <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-white">
                    Select a League
                </h2>
                <p className="text-gray-400 text-sm">
                    Click on any league to view matches
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                {leagues.map((league) => {
                    const matches =
                        league.slug === "premier-league" ? data?.data ?? [] : [];

                    return (
                        <LeagueCard
                            key={league.slug}
                            league={league.name}
                            slug={league.slug}
                            matchesCount={matches.length}
                            hasLiveMatches={
                                league.slug === "premier-league" && matches.length > 0
                            }
                            liveCount={matches.length}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Leagues