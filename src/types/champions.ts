export interface Champion {
  id: string;
  name: string;
  title: string;
  role: 'Assassin' | 'Fighter' | 'Mage' | 'Marksman' | 'Support' | 'Tank';
  difficulty: 1 | 2 | 3;
  imageUrl: string;
  splashUrl: string;
  stats: ChampionStats;
  abilities: Ability[];
}

export interface ChampionStats {
  winRate: number;
  pickRate: number;
  banRate: number;
  gamesPlayed: number;
  averageKDA: string;
}

export interface Ability {
  name: string;
  key: 'Q' | 'W' | 'E' | 'R' | 'Passive';
  description: string;
  imageUrl: string;
}