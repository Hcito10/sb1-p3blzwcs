export const formatChampionName = (championId: string): string => {
  return championId.charAt(0).toUpperCase() + championId.slice(1);
};

export const getChampionImageUrl = (championId: string): string => {
  return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${championId}.png`;
};

export const getChampionSplashUrl = (championId: string): string => {
  return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg`;
};

export const getChampionAbilityUrl = (championId: string, ability: string): string => {
  return `https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/${championId}${ability}.png`;
};