"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Flame } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { leagueLogos } from "@/lib/leagueLogos";

export interface LeagueCardProps {
  league: string;
  slug: string;
  matchesCount: number;
  liveCount?: number;
  hasLiveMatches?: boolean;
}

const LeagueCard: React.FC<LeagueCardProps> = ({
  league,
  slug,
  matchesCount,
  liveCount = 0,
  hasLiveMatches = false,
}) => {
  const logoSrc = leagueLogos[slug] ?? "/assets/images/default-league.png";
  const isDisabled = slug !== "premier-league";

  return (
    <Link
      href={isDisabled ? "#" : `/league/${slug}`}
      className={`block ${isDisabled ? "pointer-events-none opacity-50" : ""}`}
    >
      <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 hover:border-gray-600 transition-all cursor-pointer group">
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex gap-2 items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white">
                  <Image src={logoSrc} alt={`${league}-logo`} width={36} height={36} />
                </div>
                <h3 className="text-xl font-semibold text-gray-100">{league}</h3>
              </div>

              {hasLiveMatches && (
                <div className="flex items-center gap-1 text-red-500 animate-pulse">
                  <Flame className="w-4 h-4" />
                  <span className="text-sm font-medium">{liveCount} Live</span>
                </div>
              )}
            </div>

            <p className="text-gray-400 text-sm">
              {matchesCount} {matchesCount === 1 ? "match" : "matches"}
            </p>
          </div>

          <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-gray-300 transition-colors" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default LeagueCard;
