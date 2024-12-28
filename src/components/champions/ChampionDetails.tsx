import React from 'react';
import { ArrowLeft, Sword, Shield, Zap, MapPin, Target, Users } from 'lucide-react';
import { formatChampionName, getChampionImageUrl, getChampionSplashUrl } from '../../utils/champion';
import { championData } from '../../data/championData';
import { ChampionAbilities } from './ChampionAbilities';
import { ChampionLore } from './ChampionLore';
import { ChampionSynergies } from './ChampionSynergies';
import { ChampionStats } from './ChampionStats';

interface ChampionDetailsProps {
  championId: string;
  onBack: () => void;
}

export function ChampionDetails({ championId, onBack }: ChampionDetailsProps) {
  const champion = championData[championId];
  if (!champion) return null;
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="relative h-[40vh]">
        <img
          src={champion.splashUrl}
          alt={champion.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
        <button
          onClick={onBack}
          className="absolute left-4 top-4 rounded-full bg-gray-900/50 p-2 text-white backdrop-blur-sm transition-all hover:bg-gray-900/80"
        >
          <ArrowLeft className="h-6 w-6" />
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-start gap-6">
          <img
            src={champion.imageUrl}
            alt={champion.name}
            className="h-24 w-24 rounded-lg border-2 border-purple-500"
          />
          <div className="flex-1">
            <div className="flex items-baseline gap-3">
              <h1 className="text-4xl font-bold">{champion.name}</h1>
              <span className="text-lg text-purple-400">{champion.title}</span>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1">
                <Target className="h-4 w-4 text-red-400" />
                <span>{champion.role}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1">
                <MapPin className="h-4 w-4 text-green-400" />
                <span>{champion.lanes.join(', ')}</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1">
                <Users className="h-4 w-4 text-blue-400" />
                <span>Dificultad: {Array(champion.difficulty).fill('★').join('')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <ChampionLore champion={champion} />
            <ChampionAbilities champion={champion} />
          </div>
          <div className="space-y-8">
            <ChampionStats champion={champion} />
            <ChampionSynergies champion={champion} />
          </div>
        </div>
      </div>
    </div>
  );
}