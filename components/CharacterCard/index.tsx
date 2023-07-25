import React, { MouseEvent } from "react";
import styles from "./CharacterCard.module.css";
import Image from "next/image";

type Props = {
  characterName: string;
  thumbnail: string;
  comics: number;
  movies: number;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
};

export default function CharacterCard({
  characterName,
  thumbnail,
  comics,
  movies,
  onClick,
}: Props) {
  return (
    <div className={styles.characters_card_container}>
      <div className={styles.characters_card_info}>
        <div className={styles.characters_card_info_header} onClick={onClick}>
          <div className={styles.characters_card_info_header_title}>
            <h3>{characterName}</h3>
          </div>
          <div className={styles.characters_card_info_header_avatar}>
            <Image
              className={styles.characters_card_info_header_img}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              src={thumbnail}
              alt={"marvel-character"}
            />
          </div>
        </div>
        <div className={styles.characters_card_info_body}>
          <div className={styles.characters_card_info_body_item}>
            <span>Comics:</span>
            <span className={styles.characters_card_info_body_item_length}>
              {comics}
            </span>
          </div>
          <div className={styles.characters_card_info_body_item}>
            <span>Películas:</span>
            <span className={styles.characters_card_info_body_item_length}>
              {movies}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
