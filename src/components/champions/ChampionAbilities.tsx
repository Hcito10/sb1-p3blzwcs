import React from 'react';
import { getChampionAbilityUrl } from '../../utils/champion';
import { Shield, Sword, Zap, Target, Heart } from 'lucide-react';

interface ChampionAbilitiesProps {
  champion: Champion;
}

export function ChampionAbilities({ champion }: ChampionAbilitiesProps) {
  const getAbilityIcon = (key: string) => {
    switch (key) {
      case 'P': return <Heart className="h-5 w-5 text-red-400" />;
      case 'Q': return <Sword className="h-5 w-5 text-blue-400" />;
      case 'W': return <Shield className="h-5 w-5 text-green-400" />;
      case 'E': return <Zap className="h-5 w-5 text-yellow-400" />;
      case 'R': return <Target className="h-5 w-5 text-purple-400" />;
      default: return null;
    }
  };

  return (
    <div className="rounded-lg bg-gray-800/90 p-6 backdrop-blur-sm">
      <h2 className="text-2xl font-bold text-white mb-6">Habilidades</h2>
      <div className="space-y-6">
        {champion.abilities.map((ability) => (
          <div key={ability.key} className="group relative overflow-hidden rounded-lg bg-gray-700/50 p-4 transition-all hover:bg-gray-700/80">
            <div className="flex items-start gap-4">
              <div className="relative">
                <img
                  src={ability.imageUrl}
                  alt={ability.name}
                  className="h-16 w-16 rounded-lg border-2 border-gray-600 object-cover transition-all group-hover:border-blue-500"
                />
                <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 text-sm font-bold">
                  {ability.key}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  {getAbilityIcon(ability.key)}
                  <h3 className="text-lg font-bold text-white">{ability.name}</h3>
                </div>
                <p className="mt-2 text-gray-300">{ability.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}