import React from "react"
import MainLogo from "../vectors/MainLogo.jsx"
import * as styles from "../styles/Footer.module.css"
import { graphql, useStaticQuery, Link } from "gatsby"

// mui icons
import InstagramIcon from "@mui/icons-material/Instagram"

const formatNumber = n => {
  let arr = n.split("")
  arr.splice(0, 2, "(")
  arr.splice(3, 0, ") ")
  arr.splice(9, 0, "-")
  return arr.join("")
}

const Footer = () => {
  const {
    data: {
      nodes: [atendimento, email, endereco, instagram, numero],
    },
  } = useStaticQuery(graphql`
    {
      data: allContentfulInformacoesDeContato(sort: { fields: nome }) {
        nodes {
          nome
          valor
        }
      }
    }
  `)

  return (
    <footer>
      <div className={styles.mainFooter}>
        <div>
          <h4 className={styles.title}>WOOD PANEL PRODUCTS BRAZIL</h4>
          <a
            href={`https://wa.me/${numero.valor}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.phone}>{formatNumber(numero.valor)}</p>
          </a>
          <a
            href={`https://www.instagram.com/${instagram.valor}`}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.instagram}>
              <InstagramIcon />
              {instagram.valor}
            </p>
          </a>
          <p className={styles.info}>{email.valor}</p>
          <p className={styles.info}>{endereco.valor}</p>
          <p className={styles.info}>{atendimento.valor}</p>
        </div>
        <div className={styles.middleLogo}>
          <MainLogo />
        </div>
        <div className={styles.siteMap}>
          <h4>Mapa do site</h4>
          <div className={styles.column}>
            <div className={styles.mapLink}>
              <Link to="/">- Home</Link>
            </div>
            <div className={styles.mapLink}>
              <Link to="/produtos">- Produtos</Link>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.mapLink}>
              <Link to="/servicos">- Serviços</Link>
            </div>
            <div className={styles.mapLink}>
              <Link to="/contatos">- Contato</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        {"Copyright ©"} <a href="/">WPP Brazil</a> 2021.
      </div>
    </footer>
  )
}

export default Footer
