export interface Game {
    id: number;
    index: string;
    title: string;
    description: string;
    imageUrl?: string;
    status: 'released' | 'coming-soon';
  }
  
  export const games: Game[] = [
    {
      id: 1,
      index: "01",
      title: "KATAZERO",
      description: "Katazero is a game that combines fast-paced action with strategic elements, featuring a unique art style and immersive gameplay. Set in a dystopian future, players navigate through challenging levels while uncovering a complex narrative.",
      status: 'released'
    },
    {
      id: 2,
      index: "02",
      title: "coming soon",
      description: "Not in kitchen yet, but we are working on it. Stay tuned for more updates.",
      status: 'coming-soon'
    },
    {
      id: 3,
      index: "03",
      title: "coming soon",
      description: "Not in kitchen yet, but we are working on it. Stay tuned for more updates.",
      status: 'coming-soon'
    }
  ];