import React from 'react';
import { Shield, Trophy, Star, TrendingUp } from 'lucide-react';
import type { PlayerStats } from '../../types/player';

interface ProfileHeaderProps {
  stats: PlayerStats;
}

export function ProfileHeader({ stats }: ProfileHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 p-6">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="h-24 w-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 p-1">
                <div className="h-full w-full rounded-full bg-gray-900 p-2">
                  <div className="flex h-full items-center justify-center">
                    <span className="text-4xl font-bold">{stats.level}</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-3 py-1 text-sm font-semibold">
                Level
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl font-bold text-white">{stats.summonerName}</h1>
              <div className="mt-2 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-400">{stats.rank.tier} {stats.rank.division}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-400" />
                  <span className="text-yellow-400">{stats.rank.lp} LP</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-6">
            <StatBox
              icon={<Star className="h-6 w-6 text-yellow-400" />}
              label="Mastery Score"
              value={stats.masteryScore.toLocaleString()}
            />
            <StatBox
              icon={<TrendingUp className="h-6 w-6 text-green-400" />}
              label="Win Rate"
              value={`${stats.winRate.ranked}%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        {icon}
        <div>
          <p className="text-sm text-gray-300">{label}</p>
          <p className="text-xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
}