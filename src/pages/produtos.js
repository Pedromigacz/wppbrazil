import React from "react"
import * as styles from "../styles/produtos.module.css"
import { graphql, useStaticQuery } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import LinkIcon from "@mui/icons-material/Link"

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css/bundle"
import "swiper/css"

// import Swiper core and required modules
import SwiperCore, { Autoplay } from "swiper"

// install Swiper modules
SwiperCore.use([Autoplay])

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return <a href={uri}>{children}</a>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
  },
}

const Products = () => {
  const {
    data: { nodes },
  } = useStaticQuery(graphql`
    {
      data: allContentfulCatalogo {
        nodes {
          name: nomePortugus
          contentful_id
          description: descrioPortugus {
            raw
          }
          imagens {
            gatsbyImageData(
              layout: FULL_WIDTH
              quality: 100
              placeholder: DOMINANT_COLOR
            )
          }
        }
      }
    }
  `)

  return (
    <main className={styles.main}>
      {nodes &&
        nodes.map((product, key) => (
          <div className={styles.card} key={key} id={key}>
            <div>
              <h2 className={styles.title}>
                {product.name}{" "}
                <button
                  className={styles.copyLinkIcon}
                  onClick={e =>
                    navigator.clipboard.writeText(
                      `https://vigilant-carson-85b858.netlify.app/produtos#${key}`
                    )
                  }
                >
                  <LinkIcon />
                </button>
              </h2>
              <div className={styles.description}>
                {renderRichText(product.description, richTextOptions)}
              </div>
            </div>
            <div className={styles.carousel}>
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {product.imagens &&
                  product.imagens.map((img, key) => (
                    <SwiperSlide key={key}>
                      <div className={styles.imageContainer}>
                        <GatsbyImage image={getImage(img)} alt={product.name} />
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        ))}
    </main>
  )
}

export default Products
