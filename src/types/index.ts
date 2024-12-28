export interface PlayerStats {
  username: string;
  rank: string;
  level: number;
  winRate: number;
  kda: {
    kills: number;
    deaths: number;
    assists: number;
  };
  recentMatches: Match[];
  mainChampions: Champion[];
}

export interface Match {
  id: string;
  champion: string;
  result: 'victory' | 'defeat';
  kda: string;
  date: string;
  duration: string;
}

export interface Champion {
  id: string;
  name: string;
  winRate: number;
  gamesPlayed: number;
  imageUrl: string;
}