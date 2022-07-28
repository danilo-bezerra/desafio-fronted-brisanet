import React, { useContext } from "react";
import styles from "./style.module.css";
import { Button } from "../Button";

export function Modal({changeModalVisible, children}) {

  return (
    <div className={styles.containerModal}>
      <section className={styles.modal}>
        <Button className={styles.btnClose} onClick={changeModalVisible}>
          X
        </Button>
        {children}
      </section>
    </div>
  );
}
