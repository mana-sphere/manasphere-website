export interface Milestone {
    id: number;
    quarter: string;
    title: string;
    description: string;
    status: 'completed' | 'in-progress' | 'upcoming';
}
  
export const milestones: Milestone[] = [
    {
      id: 1,
      quarter: "Q1 2024",
      title: "KATAZERO Launch",
      description: "Official release of our flagship title KATAZERO, featuring fast-paced action and strategic gameplay elements.",
      status: 'completed'
    },
    {
      id: 2,
      quarter: "Q2 2024",
      title: "Content Update 1.0",
      description: "Major content update including new levels, weapons, and gameplay mechanics based on community feedback.",
      status: 'in-progress'
    },
    {
      id: 3,
      quarter: "Q3 2024",
      title: "New Game Announcement",
      description: "Revealing our second major title, with early access planned for select community members.",
      status: 'upcoming'
    },
    {
      id: 4,
      quarter: "Q4 2024",
      title: "Community Features",
      description: "Introduction of community-driven features including level editor and mod support.",
      status: 'upcoming'
    }
];