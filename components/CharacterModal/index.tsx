import React, { MouseEvent } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from "./CharacterModal.module.css";
import { Character } from "../../types";

type Props = {
  character: Character;
  onClose: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function CharacterModal({ character, onClose }: Props) {
  return ReactDOM.createPortal(
    <div className={styles.character_modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_content_avatar}>
          <Image
            className={styles.modal_content_avatar_img}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={"marvel-character"}
          />
        </div>
        <h2>{character.name}</h2>
        <p>{character.description || "Sin Description"}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>,
    document.getElementById("modal-root") as Element
  );
}
