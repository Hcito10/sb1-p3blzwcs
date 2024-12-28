import React from 'react';
import { Sword, Shield, Zap } from 'lucide-react';
import type { Champion } from '../../types/champions';

interface ChampionStatsProps {
  champion: Champion;
}

export function ChampionStats({ champion }: ChampionStatsProps) {
  return (
    <div className="rounded-lg bg-gray-800 p-6">
      <h2 className="text-2xl font-bold">Estadísticas y Puntos Fuertes</h2>
      
      <div className="mt-6 space-y-6">
        <div>
          <h3 className="mb-3 font-semibold">Perfil de Daño</h3>
          <div className="space-y-2">
            <StatBar 
              icon={<Sword className="h-5 w-5 text-red-400" />}
              label="Físico"
              value={champion.damageProfile.physical}
            />
            <StatBar 
              icon={<Zap className="h-5 w-5 text-purple-400" />}
              label="Mágico"
              value={champion.damageProfile.magical}
            />
            <StatBar 
              icon={<Shield className="h-5 w-5 text-blue-400" />}
              label="Resistencia"
              value={champion.damageProfile.durability}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Fortalezas</h3>
          <ul className="list-inside list-disc space-y-2 text-green-400">
            {champion.strengths.map((strength, index) => (
              <li key={index}>{strength}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Debilidades</h3>
          <ul className="list-inside list-disc space-y-2 text-red-400">
            {champion.weaknesses.map((weakness, index) => (
              <li key={index}>{weakness}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold">Consejos</h3>
          <ul className="list-inside list-disc space-y-2 text-blue-400">
            {champion.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function StatBar({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <div className="flex-1">
        <div className="flex justify-between text-sm">
          <span>{label}</span>
          <span>{value}%</span>
        </div>
        <div className="mt-1 h-2 rounded-full bg-gray-700">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            style={{ width: `${value}%` }}
          />
        </div>
      </div>
    </div>
  );
}