import Layout from "../components/Layout"
import { Link } from "gatsby"
import React from "react"

export default function NotFound() {
  return (
    <Layout page="404" bgColor="inherit">
      <div>
        <Link to="/">
          <h1>Sorry, couldn't find that page.</h1>
        </Link>
      </div>
    </Layout>
  )
}
