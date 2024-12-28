import React from 'react';
import { Clock, Sword, Shield, Eye } from 'lucide-react';
import type { Match } from '../../types/player';

interface MatchHistoryCardProps {
  match: Match;
}

export function MatchHistoryCard({ match }: MatchHistoryCardProps) {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const calculateKDA = () => {
    const { kills, deaths, assists } = match.kda;
    return ((kills + assists) / Math.max(deaths, 1)).toFixed(2);
  };

  return (
    <div className={`relative overflow-hidden rounded-lg ${
      match.result === 'victory' ? 'bg-blue-900/50' : 'bg-red-900/50'
    } p-4 transition-all hover:scale-[1.02]`}>
      <div className="flex items-center gap-4">
        <img
          src={match.champion.imageUrl}
          alt={match.champion.name}
          className="h-16 w-16 rounded-lg object-cover"
        />
        
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white">{match.champion.name}</h3>
              <p className="text-sm text-gray-300">{match.gameMode}</p>
            </div>
            
            <div className="text-right">
              <p className={`font-bold ${
                match.result === 'victory' ? 'text-blue-400' : 'text-red-400'
              }`}>
                {match.result.toUpperCase()}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Clock className="h-4 w-4" />
                {formatDuration(match.duration)}
              </div>
            </div>
          </div>
          
          <div className="mt-2 flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Sword className="h-4 w-4 text-red-400" />
              <span>{match.kda.kills}/{match.kda.deaths}/{match.kda.assists}</span>
              <span className="text-sm text-gray-400">({calculateKDA()} KDA)</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-yellow-400" />
              <span>{match.cs} CS</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4 text-purple-400" />
              <span>{match.vision} Vision</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}