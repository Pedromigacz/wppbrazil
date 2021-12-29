import React, { useState } from "react"
import * as styles from "../styles/Navbar.module.css"
import { Link } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"

// Icons
import MainLogo from "../vectors/MainLogo.jsx"
import PTFlag from "../vectors/PTFlag.jsx"
import USFlag from "../vectors/USFlag.jsx"
import SPFlag from "../vectors/SPFlag.jsx"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

const DesktopNavbar = () => (
  <nav className={styles.nav}>
    <div className={styles.logo}>
      <MainLogo />
    </div>
    <Link to="/" className={styles.link}>
      Home
    </Link>
    <Link to="/produtos" className={styles.link}>
      Produtos
    </Link>
    <Link to="/contato" className={styles.link}>
      Contato
    </Link>
    <Link to="/servicos" className={styles.link}>
      Serviços
    </Link>
    <div className={styles.languageSelector}>
      <span>Idioma:&nbsp;</span>
      <Link to="#">
        <PTFlag className={styles.icons} />
      </Link>
      <Link to="#">
        <USFlag className={styles.icons} />
      </Link>
      <Link to="#">
        <SPFlag className={styles.icons} />
      </Link>
    </div>
  </nav>
)

const menuVariants = {
  hidden: {
    opacity: 0,
    x: 500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
}

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <AnimatePresence exitBeforeEnter>
      {open ? (
        <motion.nav
          className={styles.mobileNav}
          key="1"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <button className={styles.closeIcon} onClick={e => setOpen(false)}>
            <CloseIcon />
          </button>
          <h1>Menu:</h1>
          <Link className={styles.mobileItem} to="/">
            Home
          </Link>
          <Link className={styles.mobileItem} to="/produtos">
            Produtos
          </Link>
          <Link className={styles.mobileItem} to="contato">
            Contato
          </Link>
          <Link className={styles.mobileItem} to="#">
            Endereço
          </Link>
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
        </motion.nav>
      ) : (
        <motion.button
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          key="2"
          className={styles.burguerButton}
          onClick={e => setOpen(prev => !prev)}
        >
          <MenuIcon />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

const Navbar = () => (
  <>
    <MobileNavbar />
    <DesktopNavbar />
  </>
)

export default Navbar
