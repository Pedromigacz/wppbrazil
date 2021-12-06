import React from "react"
import * as styles from "../styles/Navbar.module.css"
import { Link } from "gatsby"

// Icons
import PTFlag from "../vectors/PTFlag.jsx"
import USFlag from "../vectors/USFlag.jsx"
import SPFlag from "../vectors/SPFlag.jsx"

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>WPP Placeholder</div>
      <Link to="#" className={styles.link}>
        Home
      </Link>
      <Link to="#" className={styles.link}>
        Produtos
      </Link>
      <Link to="#" className={styles.link}>
        Contato
      </Link>
      <Link to="#" className={styles.link}>
        Endereços
      </Link>
      <div className={styles.languageSelector}>
        <span>Idioma:&nbsp;</span>
        <Link to="#">
          <PTFlag className={styles.icons} />
        </Link>
        /
        <Link to="#">
          <USFlag className={styles.icons} />
        </Link>
        /
        <Link to="#">
          <SPFlag className={styles.icons} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
