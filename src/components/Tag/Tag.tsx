import React from "react";
import styles from "./Tag.module.css";

export interface TagProps {
  label: string;
  variant: "info";
}

export const Tag: React.FC<TagProps> = ({ label, variant }) => {
  const variantClass = styles[variant];

  return <span className={`${styles.tag} ${variantClass}`}>{label}</span>;
};
