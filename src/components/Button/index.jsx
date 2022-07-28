import React from 'react'
import styles from './style.module.css'

export function Button({children, className, ...props}) {

  return (
    <button className={className ? [styles.button+'  '+ className] : styles.button} {...props}>
      {children}
    </button>
  );
}
