import React, { ReactElement } from "react";
import styles from "./ContentCard.module.css";

type Props = {
  children: ReactElement;
};

export default function ContentCard({ children }: Props) {
  return <div className={styles.content_card__container}>{children}</div>;
}
