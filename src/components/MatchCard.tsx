"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Match } from "@/features/leagues/leagues.types";

interface Props {
  match: Match;
}

export default function MatchCard({ match }: Props) {
  const home = match.participants.find(p => p.meta.location === "home");
  const away = match.participants.find(p => p.meta.location === "away");

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardContent className="p-4 flex items-center justify-between">
        {/* Home */}
        <div className="flex items-center gap-2">
          {home && (
            <>
              <Image src={home.image_path} alt={home.name} width={28} height={28} />
              <span className="text-white text-sm font-medium">{home.name}</span>
            </>
          )}
        </div>

        {/* VS */}
        <span className="text-gray-400 text-xs">VS</span>

        {/* Away */}
        <div className="flex items-center gap-2">
          {away && (
            <>
              <span className="text-white text-sm font-medium">{away.name}</span>
              <Image src={away.image_path} alt={away.name} width={28} height={28} />
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
