import React, { useState } from 'react';
import { ProfileHeader } from './components/profile/ProfileHeader';
import { ChampionCard } from './components/champions/ChampionCard';
import { ChampionDetails } from './components/champions/ChampionDetails';
import { MatchHistoryCard } from './components/matches/MatchHistoryCard';
import { mockPlayerData } from './data/mockData';

export default function App() {
  const [selectedChampion, setSelectedChampion] = useState<string | null>(null);

  if (selectedChampion) {
    return (
      <ChampionDetails 
        championId={selectedChampion} 
        onBack={() => setSelectedChampion(null)} 
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl p-6">
        <ProfileHeader stats={mockPlayerData} />
        
        <div className="mt-8 grid gap-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Top Champions</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockPlayerData.topChampions.map((champion) => (
                <ChampionCard 
                  key={champion.championId} 
                  champion={champion}
                  onClick={setSelectedChampion}
                />
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="mb-4 text-2xl font-bold">Recent Matches</h2>
            <div className="space-y-4">
              {mockPlayerData.matchHistory.map((match) => (
                <MatchHistoryCard key={match.id} match={match} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}