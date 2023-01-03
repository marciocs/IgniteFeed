import styles from './Header.module.css'

import IgLogo from '../assets/ignite-simbol.svg';

export function Header(){
  return(
    <header className={styles.header}>
      <img src={IgLogo} alt="Ignite"/>
      <strong> ignite feed testando</strong>
    </header>
    
  );
}