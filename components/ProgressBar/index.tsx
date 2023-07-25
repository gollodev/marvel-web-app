import React from "react";
import styles from "./ProgressBar.module.css";

type Props = {
  goal: number;
  produced: number;
};

export default function ProgressBar({ goal, produced }: Props) {
  const progressPercentage = (produced / goal) * 100;

  return (
    <div className={styles.progress_bar}>
      <div
        className={styles.progress_bar_inner}
        style={{ width: `${progressPercentage}%` }}
      />
      <div className={styles.progress_bar_labels}>
        <span className={styles.progress_bar_label_goal}>
          {goal} Peliculas <br></br>Meta de Produccion
        </span>
        <span className={styles.progress_bar_label_produced}>
          {produced} Peliculas Producidas
        </span>
      </div>
    </div>
  );
}
