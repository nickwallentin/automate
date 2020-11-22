import BlogList from "../components/BlogList"
import Layout from "../components/Layout"
import React from "react"
import { Wrapper } from "../styles/styled"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <Wrapper>
        <BlogList />
      </Wrapper>
    </Layout>
  )
}
