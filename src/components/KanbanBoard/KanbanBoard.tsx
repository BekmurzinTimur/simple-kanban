import React from "react";
import styles from "./KanbanBoard.module.css";
import { Column } from "../Column/Column";
import type { CardProps } from "../Card/Card";

export interface ColumnData {
  id: string;
  title: string;
  cards: CardProps[];
}

interface KanbanBoardProps {
  title: string;
  description: string;
  columns: ColumnData[];
}

export const KanbanBoard: React.FC<KanbanBoardProps> = ({
  title,
  description,
  columns,
}) => {
  return (
    <div className={styles.board}>
      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </header>

      <div className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </div>
    </div>
  );
};
