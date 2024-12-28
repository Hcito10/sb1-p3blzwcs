import React from 'react';

interface ChampionLoreProps {
  championId: string;
}

export function ChampionLore({ championId }: ChampionLoreProps) {
  return (
    <div className="rounded-lg bg-gray-800 p-6">
      <h2 className="text-2xl font-bold">Lore</h2>
      <p className="mt-4 text-gray-300">
        Champion lore for {championId} would be displayed here, fetched from the League of Legends API.
      </p>
    </div>
  );
}