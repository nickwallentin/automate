import "../styles/reset.css"
import "../styles/global.css"

import Header from "./Header"
import Helmet from "react-helmet"
import React from "react"
import { styled } from "linaria/lib/react"
import useSiteMetadata from "../static_queries/useSiteMetadata"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <GlobalStyles>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header page={props.page} title={title} />
      <main>{props.children}</main>
    </GlobalStyles>
  )
}

const GlobalStyles = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Inter Semibold", sans-serif;
  }
  body {
    font-size: 1.5rem;
    line-height: 4ex;
  }
  p {
    margin-bottom: 4ex;
  }
  h1 {
    font-size: 6rem;
    line-height: 2ex;
  }
`
