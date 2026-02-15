"use client";

import { useGetPremierLeagueMatchesQuery } from "@/features/leagues/leagues.api";
import MatchCard from "@/components/MatchCard";

export default function MatchesList() {
  const { data, isLoading, error } = useGetPremierLeagueMatchesQuery(undefined, {
    pollingInterval: 60000,
  });

  if (isLoading) return <p className="text-gray-400">Loading matches...</p>;
  if (error) return <p className="text-red-500">Failed to load matches.</p>;

  return (
    <div className="grid gap-3">
      {data?.data.map(match => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  );
}
