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
      description: "Our second title is currently in development. This ambitious project will push the boundaries of what's possible in interactive entertainment, with groundbreaking mechanics and stunning visuals.",
      status: 'coming-soon'
    },
    {
      id: 3,
      index: "03",
      title: "coming soon",
      description: "The third installment in our lineup is shrouded in mystery. While details remain classified, we can promise an experience that will challenge conventions and deliver unforgettable moments.",
      status: 'coming-soon'
    }
  ];