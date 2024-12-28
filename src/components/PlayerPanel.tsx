import React from 'react';
import { Trophy, Swords, Target, Crown } from 'lucide-react';
import { PlayerStats } from '../types';

interface PlayerPanelProps {
  stats: PlayerStats;
}

export function PlayerPanel({ stats }: PlayerPanelProps) {
  const calculateKDA = () => {
    const { kills, deaths, assists } = stats.kda;
    return ((kills + assists) / Math.max(1, deaths)).toFixed(2);
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-6 rounded-2xl shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{stats.username}</h2>
            <p className="text-cyan-400">Level {stats.level}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-semibold text-white">{stats.rank}</p>
          <p className="text-emerald-400">Top 15%</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <StatCard
          icon={<Trophy className="w-6 h-6 text-yellow-400" />}
          label="Win Rate"
          value={`${stats.winRate}%`}
        />
        <StatCard
          icon={<Swords className="w-6 h-6 text-red-400" />}
          label="KDA Ratio"
          value={calculateKDA()}
        />
        <StatCard
          icon={<Target className="w-6 h-6 text-green-400" />}
          label="Matches"
          value={stats.recentMatches.length.toString()}
        />
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-white mb-4">Recent Performance</h3>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            style={{ width: `${stats.winRate}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-4 rounded-xl hover:bg-opacity-75 transition-all duration-300">
      <div className="flex items-center space-x-3 mb-2">
        {icon}
        <span className="text-gray-400">{label}</span>
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}