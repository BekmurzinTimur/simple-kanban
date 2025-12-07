import type { ColumnData } from "./components/KanbanBoard/KanbanBoard";

export const kanbanData: ColumnData[] = [
  {
    id: "last-week",
    title: "Last week",
    cards: [
      {
        id: "card-1",
        title: "Review scope",
        description: "Review #390.",
        tags: ["Due 4/11", "Design"],
      },
      {
        id: "card-2",
        title: "Team retro",
      },
    ],
  },
  {
    id: "this-week",
    title: "This week",
    cards: [
      {
        id: "card-3",
        title: "Usability test",
        description: "Research questions with Carina.",
        teamMembers: ["/team_members/1.png", "/team_members/2.jpg"],
        tags: ["Research"],
      },
    ],
  },
  {
    id: "next-week",
    title: "Next week",
    cards: [
      {
        id: "card-4",
        title: "Culture workshop",
        description: "Let's build a great team.",
        teamMembers: ["/team_members/2.jpg"],
        tags: ["Due 24/11"],
      },
    ],
  },
];
