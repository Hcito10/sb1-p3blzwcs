export const championData: Record<string, Champion> = {
  "Ahri": {
    id: "Ahri",
    name: "Ahri",
    title: "la Zorra de Nueve Colas",
    role: "Mage",
    difficulty: 2,
    imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/Ahri.png",
    splashUrl: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg",
    lore: "Ahri es una vastaya conectada de forma innata al poder latente de Runaterra, y es capaz de convertir magia en orbes de energía pura. Le gusta jugar con sus presas, manipulando sus emociones antes de devorar su esencia vital. A pesar de su naturaleza depredadora, Ahri conserva un sentido de empatía mientras devora los recuerdos de cada alma que consume.",
    abilities: [
      {
        name: "Ladrón de Esencia",
        key: "P",
        description: "Cada vez que Ahri golpea a un enemigo con una de sus habilidades, obtiene una carga de Esencia. Al acumular 9 cargas, su siguiente habilidad que impacte curará a Ahri. Cuando Ahri obtiene una eliminación o asistencia de campeón, obtiene una breve ráfaga de velocidad de movimiento y Esencia del Espíritu Zorro durante unos segundos.",
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/passive/Ahri_SoulEater2.png"
      },
      {
        name: "Orbe del Engaño",
        key: "Q",
        description: "Ahri lanza y recupera su orbe, infligiendo daño mágico a la ida y daño verdadero a la vuelta. El orbe acelera al regresar a Ahri, otorgándole un breve impulso de velocidad de movimiento.",
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/AhriQ.png"
      },
      {
        name: "Fuego Zorruno",
        key: "W",
        description: "Ahri libera tres fuegos fatuos que orbitan a su alrededor y luego se dirigen hacia enemigos cercanos, priorizando a los campeones. Cada fuego fatuo inflige daño mágico y puede golpear al mismo objetivo.",
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/AhriW.png"
      },
      {
        name: "Encanto",
        key: "E",
        description: "Ahri lanza un beso que daña y encanta al primer enemigo alcanzado, haciéndolo caminar inofensivamente hacia ella y recibir daño aumentado de las habilidades de Ahri durante la duración.",
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/AhriE.png"
      },
      {
        name: "Impulso Espiritual",
        key: "R",
        description: "Ahri se impulsa en la dirección elegida y dispara rayos de esencia que dañan a los enemigos cercanos. Impulso Espiritual puede usarse hasta tres veces antes de entrar en enfriamiento, y obtiene una recarga adicional al conseguir una eliminación o asistencia.",
        imageUrl: "https://ddragon.leagueoflegends.com/cdn/13.24.1/img/spell/AhriR.png"
      }
    ],
    // ... rest of Ahri's data ...
  },
  // ... other champions ...
};