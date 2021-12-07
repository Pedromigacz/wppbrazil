import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/index.module.css"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

const IndexPage = () => {
  const {
    data: { nodes },
  } = useStaticQuery(graphql`
    {
      data: allContentfulPrimeiraGaleria {
        nodes {
          imagem {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: TRACED_SVG
            )
          }
        }
      }
    }
  `)

  return (
    <section className={styles.firstSection}>
      <main className={styles.main}>
        <div className={styles.titlesContainer}>
          <h1>Wood Panel Products</h1>
          <h2>Especialistas em Painéis de Madeira Engenheirada</h2>
          <h3>COMPENSADOS - OSB - Chapas - Peças Usinadas e Recortadas</h3>
        </div>
      </main>
      <aside className={styles.aside}>
        {nodes.map((img, key) => (
          <div className={styles.image}>
            <GatsbyImage image={getImage(img.imagem)} alt={"slide"} />
          </div>
        ))}
      </aside>
    </section>
  )
}

export default IndexPage
