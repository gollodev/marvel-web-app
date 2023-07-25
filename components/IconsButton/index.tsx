import React, { ReactNode, MouseEvent } from "react";
import styles from "./IconsButton.module.css";

type Props = {
  icon: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

export default function IconButton({ icon, onClick, disabled }: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={disabled ? styles.icon_button_disabled : styles.icon_button}
    >
      {icon}
    </button>
  );
}
