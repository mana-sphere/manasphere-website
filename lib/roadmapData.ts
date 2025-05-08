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
      title: "Ideation & Prototyping",
      description: "Implement the fundamentals of the app, workflow, UI/UX.",
      status: 'completed'
    },
    {
      id: 2,
      quarter: "Q2 2024",
      title: "Development & Social Buzz",
      description: "Building the core game mechanics and starting community engagement through social media.",
      status: 'in-progress'
    },
    {
      id: 3,
      quarter: "Q3 2024",
      title: "Game Reveal & Early Access",
      description: "Reveal the game to the public and provide early access to select players.",
      status: 'upcoming'
    },
    {
      id: 4,
      quarter: "Q4 2024",
      title: "Launch & Community Events",
      description: "Official game launch with community events and tournaments.",
      status: 'upcoming'
    }
];