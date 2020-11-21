import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"
import useBlogData from "../static_queries/useBlogData"

export default function BlogList() {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <Link to={`/blog/${blog.node.fields.slug}`} key={blog.node.id}>
                <li key={blog.node.fields.slug}>
                  <div>
                    <Img
                      fluid={
                        blog.node.frontmatter.hero_image.childImageSharp.fluid
                      }
                      alt={blog.node.frontmatter.title}
                    />
                  </div>
                  <div>
                    <h2>{blog.node.frontmatter.title}</h2>
                    <h3>{blog.node.frontmatter.date}</h3>
                    <p>{blog.node.excerpt}</p>
                  </div>
                </li>
              </Link>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul>{renderBlogData()}</ul>
    </section>
  )
}
