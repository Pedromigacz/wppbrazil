import React from "react"
import MainLogo from "../vectors/MainLogo.jsx"
import * as styles from "../styles/Footer.module.css"

// mui icons
import InstagramIcon from "@mui/icons-material/Instagram"

const mapElement = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14360.713095822355!2d-50.391817509623586!3d-25.863609329018523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e7a2d987cbac45%3A0x41e877dfa9a9348c!2sS%C3%A3o%20Mateus%20do%20Sul%2C%20PR%2C%2083900-000!5e0!3m2!1spt-BR!2sbr!4v1639003296578!5m2!1spt-BR!2sbr" width="300" height="220" style="border:0;" allowfullscreen="true" loading="lazy"></iframe>`

const Footer = () => {
  return (
    <footer>
      <div className={styles.mainFooter}>
        <div>
          <h4 className={styles.title}>WOOD PANEL PRODUCTS BRAZIL</h4>
          <p className={styles.phone}>{"(42) 99911-5663"}</p>
          <p className={styles.instagram}>
            <InstagramIcon />
            WPPBrazil
          </p>
          <p className={styles.info}>{"henrique.jonson@wppbr.com"}</p>
          <p className={styles.info}>{"Colonia Iguacu, S/N"}</p>
          <p className={styles.info}>{"Segunda a sexta das 8:00h as 18:00h"}</p>
        </div>
        <div>
          <MainLogo />
        </div>
        <div
          className={styles.sectionThree}
          dangerouslySetInnerHTML={{ __html: mapElement }}
        ></div>
      </div>
      <div></div>
    </footer>
  )
}

export default Footer
