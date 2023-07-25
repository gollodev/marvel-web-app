import React from "react";
import styles from "./Header.module.css";
import Wrapper from "../Wrapper";
import { FaGear, FaBell } from "react-icons/fa6";

export default function Header() {
  return (
    <header className={styles.header}>
      <Wrapper>
        <nav className={styles.nav}>
          <div className={styles.menu}>
            <div className={styles.logo}>
              <h1>Marvel</h1>
            </div>
            <div className={styles.menu_items}>
              <ul className={styles.menu_items__list}>
                <li className={styles.menu_items__list__item}>Home</li>
                <li className={`${styles.menu_items__list__item}`}>
                  Personajes
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.nav__icons}>
            <FaGear className={styles.nav__icons__item} />
            <FaBell className={styles.nav__icons__item} />
          </div>
        </nav>
      </Wrapper>
    </header>
  );
}
