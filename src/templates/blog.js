import { Link, graphql } from "gatsby"
import { Section, Wrapper } from "../styles/styled"
import { motion, useTransform, useViewportScroll } from "framer-motion"

import Img from "gatsby-image"
import Layout from "../components/Layout"
import React from "react"
import Sickty from "react-sticky-el"
import Sticky from "react-sticky-el"
import { styled } from "linaria/react"
import useBlogData from "../static_queries/useBlogData"

export default function Blog(props) {
  const data = props.data.markdownRemark
  const allBlogData = useBlogData()
  const nextSlug = getNextSlug(data.fields.slug)
  const { scrollYProgress } = useViewportScroll()
  const alphaAnim = useTransform(scrollYProgress, [0, 0.02, 0.05], [1, 0.5, 0])
  const yPosAnim = useTransform(
    scrollYProgress,
    [0, 0.02, 0.05],
    [0, -50, -100]
  )
  const yBodyPosAnim = useTransform(
    scrollYProgress,
    [0, 0.02, 0.05],
    [0, -100, -200]
  )
  const bodyAlphaAnim = useTransform(
    scrollYProgress,
    [0, 0.02, 0.05],
    [0, 0.5, 1]
  )

  function getNextSlug(slug) {
    const allSlugs = allBlogData.map(blog => {
      return blog.node.fields.slug
    })
    const nextSlug = allSlugs[allSlugs.indexOf(slug) + 1]
    if (nextSlug !== undefined && nextSlug !== "") {
      return nextSlug
    } else {
      return allSlugs[0]
    }
  }

  return (
    <Layout>
      <article>
        <Section>
          <Wrapper>
            <Hero>
              <h1>
                {data.frontmatter.title}{" "}
                <span>{data.frontmatter.subtitle}</span>
              </h1>
              <p>{data.frontmatter.description}</p>
            </Hero>
          </Wrapper>
        </Section>

        <Section style={{ paddingTop: "0px" }}>
          <Wrapper>
            <BlogLayout>
              <motion.div>
                <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
              </motion.div>
              <Sticky stickyClassName="sticky">
                <aside>
                  <h4>Table of contents</h4>
                  <div
                    id="toc-links"
                    dangerouslySetInnerHTML={{ __html: data.tableOfContents }}
                  ></div>
                </aside>
              </Sticky>
            </BlogLayout>
          </Wrapper>
        </Section>
      </article>
    </Layout>
  )
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      tableOfContents(maxDepth: 3)
      frontmatter {
        title
        subtitle
        description
        date(formatString: "MMMM Do, YYYY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`

const BlogLayout = styled(motion.div)`
  display: grid;
  grid-template-columns: min(50ch, 100%) 1fr;
  grid-gap: 10vw;

  aside {
    transition: opacity 500ms;
    opacity: 0.4;
    padding-top: 40px;
    font-size: 1rem;
    &:hover {
      opacity: 1;
    }
    a {
      text-decoration: none;
      color: var(--c-text-3);
      &:hover {
        color: var(--c-text);
      }
    }
  }
`

const Hero = styled(motion.div)`
  scale: 1;
  opacity: 1;
  padding: 10vh 0px;
  h1 {
    span {
      display: block;
      color: #666;
    }
  }
  p {
    font-size: 2rem;
    line-height: 3ex;
    max-width: 800px;
    font-family: "Inter Semibold", sans-serif;
    margin-bottom: 0px;
  }
`
