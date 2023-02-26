import React from 'react'
import MenuLink from '../MenuLink';
import styles from './Menu.module.css'

export default function Menu() {

    // const localizacao = useLocation();

    // console.log(localizacao)

  return (
    <header>
        <nav className={styles.navegacao}>
            <MenuLink texto="Início" pagina="/" />
            <MenuLink texto="Sobre mim" pagina="/sobremim" />
        </nav>
    </header>
  )
}
