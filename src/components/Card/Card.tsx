import React from "react";
import styles from "./Card.module.css";
import { Avatar } from "../Avatar/Avatar";
import { Tag } from "../Tag/Tag";

export interface CardProps {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  teamMembers?: string[];
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  tags,
  teamMembers,
}) => {
  return (
    <div className={`${styles.card}`}>
      {teamMembers && teamMembers.length > 0 && (
        <div className={styles.avatars}>
          {teamMembers.map((avatar, index) => (
            <Avatar
              key={index}
              src={avatar}
              alt={`Tagged team members #${index + 1}`}
            />
          ))}
        </div>
      )}

      <h3 className={styles.title}>{title}</h3>

      {description && <p className={styles.description}>{description}</p>}

      {tags && tags.length > 0 && (
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <Tag key={index} label={tag} variant={"info"} />
          ))}
        </div>
      )}
    </div>
  );
};
