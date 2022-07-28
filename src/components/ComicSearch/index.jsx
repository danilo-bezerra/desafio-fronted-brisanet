import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { ComicContext } from "../../contexts/ComicContext";
import { Button } from "../Button";
import { api, md5Hash, publicKey, timeStamp } from "../../services/api";

export function ComicSearch() {
  const [input, setInput] = useState("");

  const { setComicList, setIsLoading } = useContext(ComicContext);

  async function fetchComicList() {
    setIsLoading(true);
    let res;
    if (input) {
      res = await api.get(
        `/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${md5Hash}&orderBy=title&titleStartsWith=${input}&offset=20`
      );
    } else {
      res = await api.get(
        `/comics?ts=${timeStamp}&apikey=${publicKey}&hash=${md5Hash}&orderBy=title&limit=30`
      );
    }
    setIsLoading(false);
    setComicList(res.data.data);
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
