import React from "react"
import * as styles from "../styles/SecondSection.module.css"

// icons
import CardAssistance from "../vectors/CardAssistance.jsx"
import CardProduct from "../vectors/CardProduct.jsx"
import CardQuality from "../vectors/CardQuality.jsx"

const SecondSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Conheça nossos produtos e serviços:</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <CardProduct />
          <h3>Desenvolvimento e fornecimento de produtos</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <CardAssistance />
          <h3>Vendas e pós-vendas</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={styles.card}>
          <CardQuality />
          <h3>Controle e inspeção de qualidade</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SecondSection
