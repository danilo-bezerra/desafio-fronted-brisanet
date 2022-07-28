import React, { useContext } from "react";
import styles from "./style.module.css";
import Logo from "../../assets/logo-marvel.png";
import { ComicItem } from "../ComicItem";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Loading } from "../Loading";
import { ComicSearch } from "../ComicSearch";

export function ComicList() {
  const { comicList, isLoading } = useContext(GlobalContext);

  return (
    <>
      <ComicSearch />
      {isLoading ? (
        <Loading />
      ) : (
        <ul className={styles.comicList}>
          {comicList?.results.map((comic) => (
            <ComicItem key={comic.id} comic={comic} />
          ))}
        </ul>
      )}
    </>
  );
}
