import React, { useContext } from "react";
import styles from "./style.module.css";
import { ComicContext } from "../../contexts/ComicContext";
import { Button } from "../Button";
import { Modal } from "../Modal";

export function ComicModal() {
  const { modalComic, handleChangeShowComicModal } =
    useContext(ComicContext);

  return (
    <Modal changeModalVisible={handleChangeShowComicModal}>
      <div>
        <img src={modalComic?.thumbnail?.path + ".jpg"} alt="" />
      </div>
      <div>
        <h3 className={styles.title}>{modalComic?.title}</h3>
        <h4 className={styles.sectionTitle}>Prices</h4>
        {modalComic?.prices.map(({ type, price }) => (
          <p key={type} className={styles.price}>
            {type == "printPrice" ? "Print Version" : "Digital Version"}:{" "}
            <span>U$ {price}</span>
          </p>
        ))}
        <h4 className={styles.sectionTitle}>Description</h4>
        <p className={styles.description}>
          {modalComic?.description || "This comic dos not have a description"}
        </p>
        <h4 className={styles.sectionTitle}>Comic URLs</h4>
        {modalComic?.urls.map(({ type, url }) => (
          <a href={url} key={type} className={styles.link} target={"_blank"}>
            {type}
          </a>
        ))}

        <Button className={styles.button}>Send to my address</Button>
      </div>
    </Modal>
  );
}
