import { notFound } from "next/navigation";
import { leagues } from "@/features/leagues/constants/leagues";
import MatchesList from "@/features/leagues/components/MatchesList";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function LeaguePage({ params }: Props) {
  const { slug } = await params;

  const league = leagues.find((l) => l.slug === slug);

  if (!league) return notFound();

  return (
    <div className="min-h-screen bg-gray-900 py-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-white">{league.name}</h1>

        {league.slug === "premier-league" ? (
          <MatchesList />
        ) : (
          <p className="text-gray-400">
            No live data available on free plan.
          </p>
        )}
      </div>
    </div>
  );
}
