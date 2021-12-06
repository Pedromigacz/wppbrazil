import React, { useState } from "react"
import * as styles from "../styles/Navbar.module.css"
import { Link } from "gatsby"

// Icons
import PTFlag from "../vectors/PTFlag.jsx"
import USFlag from "../vectors/USFlag.jsx"
import SPFlag from "../vectors/SPFlag.jsx"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const DesktopNavbar = () => (
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

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return open ? (
    <nav className={styles.mobileNav}>
      <button className={styles.closeIcon} onClick={e => setOpen(false)}>
        <CloseIcon />
      </button>
      <h1>Menu:</h1>
      <Link className={styles.mobileItem}>Home</Link>
      <Link className={styles.mobileItem}>Produtos</Link>
      <Link className={styles.mobileItem}>Contato</Link>
      <Link className={styles.mobileItem}>Endereços</Link>
      <div className={styles.mobileLanguageSelector}>
        <h2>IDIOMA:</h2>
        <Link to="#" className={styles.mobileLink}>
          <PTFlag className={styles.mobileIcons} />
          Português
        </Link>
        <Link to="#" className={styles.mobileLink}>
          <USFlag className={styles.mobileIcons} />
          English
        </Link>
        <Link to="#" className={styles.mobileLink}>
          <SPFlag className={styles.mobileIcons} />
          Español
        </Link>
      </div>
    </nav>
  ) : (
    <button
      className={styles.burguerButton}
      onClick={e => setOpen(prev => !prev)}
    >
      <MenuIcon />
    </button>
  )
}

const Navbar = () => {
  return <MobileNavbar />
}

export default Navbar
