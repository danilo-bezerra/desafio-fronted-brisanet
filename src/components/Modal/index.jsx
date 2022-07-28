import React, { useContext } from "react";
import styles from "./style.module.css";
import { Button } from "../Button";

export function Modal({changeModalVisible, children}) {

  return (
    <div className={styles.containerModal}>
      <Button className={styles.btnClose} onClick={changeModalVisible}>
        X
      </Button>
      <section className={styles.modal}>{children}</section>
    </div>
  );
}
