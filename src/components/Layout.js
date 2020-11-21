import "../styles/reset.css"
import "../styles/global.css"

import Header from "./Header"
import Helmet from "react-helmet"
import React from "react"
import useSiteMetadata from "../static_queries/useSiteMetadata"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <section>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header page={props.page} title={title} />
      <div>{props.children}</div>
    </section>
  )
}
