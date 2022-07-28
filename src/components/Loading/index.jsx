import React from 'react'
import styles from './style.module.css'
import Logo from '../../assets/logo-marvel.png'

export function Loading({comic}) {
  console.log(comic)

  return (
    <div className={styles.container}>
      <div className={styles.loading}></div>
    </div>
  );
}
