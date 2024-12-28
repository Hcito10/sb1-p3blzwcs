export interface PlayerStats {
  summonerName: string;
  level: number;
  rank: {
    tier: string;
    division: string;
    lp: number;
  };
  winRate: {
    total: number;
    ranked: number;
    casual: number;
  };
  masteryScore: number;
  recentPerformance: {
    wins: number;
    losses: number;
    streak: number;
    averageKDA: string;
  };
  topChampions: PlayerChampion[];
  matchHistory: Match[];
}

export interface PlayerChampion {
  championId: string;
  masteryLevel: number;
  masteryPoints: number;
  gamesPlayed: number;
  winRate: number;
  averageKDA: string;
}

export interface Match {
  id: string;
  timestamp: number;
  duration: number;
  gameMode: string;
  champion: {
    id: string;
    name: string;
    imageUrl: string;
  };
  result: 'victory' | 'defeat';
  kda: {
    kills: number;
    deaths: number;
    assists: number;
  };
  cs: number;
  vision: number;
  items: string[];
  team: TeamStats;
}