import { Link } from "gatsby"
import React from "react"

export default function Header(props) {
  return (
    <header>
      <nav role="navigation" aria-label="main navigation">
        <Link to="/">{props.title}</Link>
      </nav>
    </header>
  )
}
