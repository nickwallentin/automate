import { Link } from "gatsby"
import React from "react"
import { Wrapper } from "../styles/styled"

export default function Header(props) {
  return (
    <header>
      <Wrapper>
        <nav role="navigation" aria-label="main navigation">
          <Link to="/">{props.title}</Link>
        </nav>
      </Wrapper>
    </header>
  )
}
