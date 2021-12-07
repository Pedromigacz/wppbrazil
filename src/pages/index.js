import * as React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/index.module.css"

import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Seo from "../components/seo"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css/bundle"
import "swiper/css"

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper"

// install Swiper modules
SwiperCore.use([Autoplay])

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
      <Swiper
        className={styles.slider}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {nodes.map((img, key) => (
          <SwiperSlide key={key} className={styles.slide}>
            <div className={styles.image}>
              <GatsbyImage image={getImage(img.imagem)} alt={"slide"} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default IndexPage
