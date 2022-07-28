import React from 'react'
import styles from './style.module.css'
import Logo from '../../assets/logo-marvel.png'
import { Button } from '../Button'

export function Header({ changeShowMapModal }) {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="" className={styles.logo} />
      <Button onClick={changeShowMapModal}>Select Address</Button>
    </header>
  );
}
