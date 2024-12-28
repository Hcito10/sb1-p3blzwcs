import React from 'react';
import type { PlayerChampion } from '../../types/player';

interface ChampionCardProps {
  champion: PlayerChampion;
  onClick: (championId: string) => void;
}

export function ChampionCard({ champion, onClick }: ChampionCardProps) {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-gray-900 transition-all hover:scale-105 cursor-pointer"
      onClick={() => onClick(champion.championId)}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.championId}_0.jpg`}
        alt={champion.championId}
        className="h-48 w-full object-cover"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">{champion.championId}</h3>
            <p className="text-sm text-gray-300">Mastery {champion.masteryLevel}</p>
          </div>
          
          <div className="text-right">
            <p className="text-sm font-semibold text-blue-400">{champion.winRate}% WR</p>
            <p className="text-xs text-gray-400">{champion.gamesPlayed} games</p>
          </div>
        </div>
        
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${champion.masteryPoints / 10000}%` }}
          />
        </div>
      </div>
    </div>
  );
}