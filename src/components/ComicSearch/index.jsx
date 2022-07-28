import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Button } from "../Button";
import getComicList from "../../utils/getComicList";

export function ComicSearch() {
  const [input, setInput] = useState("");

  const { setComicList, setIsLoading } = useContext(GlobalContext);

  async function fetchComicList() {
    setIsLoading(true);
    
    if (input) {
      await getComicList(setComicList, `&titleStartsWith=${input}`);
    } else {
     await getComicList(setComicList);
    }
    setIsLoading(false);
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={input}
        onChange={({ target }) => setInput(target.value)}
        placeholder="Search a comic"
      />
      <Button onClick={fetchComicList}>Search</Button>
    </div>
  );
}
