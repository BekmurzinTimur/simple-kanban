import React from "react";
import styles from "./Avatar.module.css";

export interface AvatarProps {
  src: string;
  alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={styles.avatar} />;
};

export default Avatar;
