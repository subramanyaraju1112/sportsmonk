export interface ParticipantMeta {
    location: "home" | "away";
    position: number;
    winner: boolean;
  }
  
  export interface Participant {
    id: number;
    name: string;
    short_code: string;
    image_path: string;
    meta: ParticipantMeta;
  }
  
  export interface LeagueInfo {
    id: number;
    name: string;
    image_path: string;
  }
  
  export interface Match {
    id: number;
    name: string;
    starting_at: string;
    starting_at_timestamp: number;
    participants: Participant[];
    league: LeagueInfo;
  }
  
  export interface LivescoresResponse {
    data: Match[];
  }
  