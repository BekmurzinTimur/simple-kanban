import React from "react";
import styles from "./Column.module.css";
import { Card, type CardProps } from "../Card/Card";

interface ColumnProps {
  id: string;
  title: string;
  cards: CardProps[];
}

export const Column: React.FC<ColumnProps> = ({ title, cards }) => {
  return (
    <div className={styles.column}>
      <span className={styles.header}>
        <span className={styles.title}>{title}</span>
      </span>

      <div className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
