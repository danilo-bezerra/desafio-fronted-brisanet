import React from 'react'
import styles from './style.module.css'

export function Loading() {

  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
}
