import Head from "next/head";
import localFont from "next/font/local";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import YouTube from "react-youtube";
import crypto from "crypto";
import { useEffect, useState } from "react";
import { Character, Result } from "../types";
import Header from "../components/Header";
import ContentCard from "../components/ContentCard";
import CharacterCard from "../components/CharacterCard";
import IconButton from "../components/IconsButton";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import ProgressBar from "../components/ProgressBar";
import CharacterModal from "../components/CharacterModal";

type Props = {
  charactersList: Result;
};

const BeaufortforLOL = localFont({ src: "../font/BeaufortforLOL-Light.ttf" });

const itemsPerPage = 5;

export default function Home({ charactersList }: Props) {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(
    null
  );
  const totalPages = Math.ceil(characters.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const getPageData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return characters.slice(startIndex, endIndex);
  };

  const handleClickCharacter = (character: Character): void => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = (): void => {
    setSelectedCharacter(null);
  };

  useEffect(() => {
    setCharacters(charactersList.results);
  }, [charactersList]);

  return (
    <>
      <Head>
        <title>Marvel App</title>
        <meta name="description" content="Marvel app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container} ${BeaufortforLOL.className}`}>
        <Header />
        <main className={styles.main}>
          <div className={`${styles.content} ${styles.content1}`}>
            <ContentCard>
              <div>
                <h4>PROGRESO DE PELICULAS PRODUCIDAS</h4>
                <div className={styles.progress_bar_container}>
                  <ProgressBar goal={200} produced={75} />
                </div>
              </div>
            </ContentCard>
            <ContentCard>
              <YouTube
                videoId={"eOrNdBpGMv8"}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                    controls: 0,
                    loop: 1,
                    mute: 1,
                    modestbranding: 1,
                  },
                }}
              />
            </ContentCard>
            <ContentCard>
              <Image
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                src={
                  "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/07/hipertextual-marvel-revela-sera-final-universo-marvel-2019314666.jpg?fit=1200%2C782&quality=50&strip=all&ssl=1"
                }
                alt={"marvel-image"}
              />
            </ContentCard>
          </div>
          <div className={`${styles.content} ${styles.content2}`}>
            <div className={styles.pagination_slider}>
              {getPageData().map((character: Character) => (
                <CharacterCard
                  key={character.id}
                  characterName={character.name}
                  thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  comics={character.comics.items.length}
                  movies={character.series.items.length}
                  onClick={() => handleClickCharacter(character)}
                />
              ))}
            </div>
            {selectedCharacter && (
              <CharacterModal
                character={selectedCharacter}
                onClose={handleCloseModal}
              />
            )}
            <div className={styles.pagination_controls}>
              <IconButton
                icon={<FaAngleLeft style={{ width: "25px", height: "25px" }} />}
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              />
              <div className={styles.pagination_show_pages}>
                <span>
                  {currentPage}/{totalPages}
                </span>
              </div>
              <IconButton
                icon={
                  <FaAngleRight style={{ width: "25px", height: "25px" }} />
                }
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  async function getCharacters(offset = 0) {
    const baseUrl: string = "https://gateway.marvel.com";
    const ts = new Date().getTime();
    const hash: any = crypto
      .createHash("md5")
      .update(
        `${ts}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`
      )
      .digest("hex");

    let result = await fetch(
      `${baseUrl}/v1/public/characters?ts=${ts}&hash=${hash}&apikey=${process.env.MARVEL_PUBLIC_KEY}&limit=100&offset=${offset}`
    ).then((r) => r.json());
    return result.data;
  }

  const charactersList = await getCharacters();
  return {
    props: {
      charactersList,
    },
  };
}
