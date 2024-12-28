export interface TeamStats {
  id: 'blue' | 'red';
  objectives: {
    towers: number;
    dragons: Dragon[];
    barons: number;
    inhibitors: number;
  };
  totalKills: number;
  totalGold: number;
}

export type Dragon = 'infernal' | 'ocean' | 'mountain' | 'cloud' | 'elder' | 'hextech' | 'chemtech';