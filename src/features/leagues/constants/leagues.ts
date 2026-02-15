export type League = {
    name: string;
    slug: string;
    hasLiveApi: boolean;
  };
  
  export const leagues: League[] = [
    { name: "Premier League", slug: "premier-league", hasLiveApi: true },
    { name: "La Liga", slug: "la-liga", hasLiveApi: false },
    { name: "BundesLiga", slug: "bundesliga", hasLiveApi: false },
    { name: "SerieA", slug: "serie-a", hasLiveApi: false },
  ];
  