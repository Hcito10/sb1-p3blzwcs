export const mockPlayerData = {
  summonerName: "Faker",
  level: 576,
  rank: {
    tier: "Challenger",
    division: "I",
    lp: 1247
  },
  winRate: {
    total: 62,
    ranked: 65,
    casual: 58
  },
  masteryScore: 487,
  recentPerformance: {
    wins: 7,
    losses: 3,
    streak: 3,
    averageKDA: "8.5"
  },
  topChampions: [
    {
      championId: "Ahri",
      masteryLevel: 7,
      masteryPoints: 850000,
      gamesPlayed: 1500,
      winRate: 68,
      averageKDA: "7.2/2.1/6.8"
    },
    {
      championId: "Zed",
      masteryLevel: 7,
      masteryPoints: 720000,
      gamesPlayed: 1200,
      winRate: 65,
      averageKDA: "8.5/3.2/4.1"
    },
    {
      championId: "Leblanc",
      masteryLevel: 7,
      masteryPoints: 680000,
      gamesPlayed: 950,
      winRate: 62,
      averageKDA: "6.8/2.8/5.4"
    }
  ],
  matchHistory: [
    {
      id: "KR1",
      timestamp: Date.now() - 3600000,
      duration: 2340,
      gameMode: "Ranked Solo/Duo",
      champion: {
        id: "Ahri",
        name: "Ahri",
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ahri.png"
      },
      result: "victory",
      kda: {
        kills: 12,
        deaths: 2,
        assists: 9
      },
      cs: 289,
      vision: 28,
      items: ["4645", "3157", "3089", "3020", "3165", "4645"],
      team: {
        id: "blue",
        objectives: {
          towers: 11,
          dragons: ["infernal", "ocean", "mountain", "elder"],
          barons: 1,
          inhibitors: 3
        },
        totalKills: 32,
        totalGold: 65400
      }
    }
  ]
};