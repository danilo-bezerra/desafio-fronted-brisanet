import React, { useContext } from 'react'
import styles from './style.module.css'
import Logo from '../../assets/logo-marvel.png'
import { ComicContext } from '../../contexts/ComicContext';

export function ComicItem({comic}) {
  const { handleSetModalComic } = useContext(ComicContext);

  return (
    <li className={styles.item}>
      <button className={styles.button} onClick={() => handleSetModalComic(comic)}>
        <img
          src={comic?.thumbnail?.path + ".jpg"}
          alt="comic thumbnail"
          className={styles.banner}
        />
        <h4 className={styles.title}>{comic.title}</h4>
      </button>
    </li>
  );
}
