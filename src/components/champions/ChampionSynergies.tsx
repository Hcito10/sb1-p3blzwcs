import React from 'react';
import { Users } from 'lucide-react';
import type { Champion } from '../../types/champions';

interface ChampionSynergiesProps {
  champion: Champion;
}

export function ChampionSynergies({ champion }: ChampionSynergiesProps) {
  return (
    <div className="rounded-lg bg-gray-800 p-6">
      <h2 className="text-2xl font-bold">Sinergias</h2>
      
      <div className="mt-6 space-y-4">
        {champion.synergies.map((synergy, index) => (
          <div key={index} className="rounded-lg bg-gray-700 p-4">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-purple-400" />
              <h3 className="font-semibold text-purple-400">{synergy.champion}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-300">{synergy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}