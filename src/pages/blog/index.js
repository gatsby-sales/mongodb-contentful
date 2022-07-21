import React, { useState } from "react";
import { graphql, Link } from "gatsby";
import Section from "../../components/section";
import Layout from "../../components/layout";
import Page from "../../components/page";
import Container from "../../components/container";

export default function BlogHome({ data, location }) {
  const search = new URLSearchParams(location.search);
  const page = search.get("page");

  const [posts, setPosts] = useState(data.allContentfulBlogPost.nodes);

  return (
    <Layout>
      <Page>
        <Section>
          <h1>Blog home</h1>
          {posts.map((post) => {
            return (
              <Link to={`/blog/${post.slug}/`} key={post.id}>
                <h3>{post.title}</h3>
                <Container>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.body.childMarkdownRemark.excerpt,
                    }}
                  />
                </Container>
              </Link>
            );
          })}
        </Section>
      </Page>
    </Layout>
  );
}
export const query = graphql`
  query BlogHomeQuery {
    allContentfulBlogPost(limit: 20, sort: { fields: updatedAt, order: DESC }) {
      nodes {
        id
        title
        slug
        body {
          childMarkdownRemark {
            excerpt(format: HTML)
          }
        }
        image {
          gatsbyImageData(width: 300)
          title
        }
      }
    }
  }
`;
// export async function getServerData({ query }) {
//   if (query.page) {
//     const contentful = require("contentful");

//     const client = contentful.createClient({
//       space: process.env.CONTENTFUL_SPACE_ID,
//       accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
//     });

//     const response = await client.getEntries({
//       content_type: "blogPost",
//       limit: 20,
//       skip: (query.page - 1) * 20,
//     });
//     return {
//       status: 200,
//       props: response.items,
//     };
//   }
//   return {
//     status: 200,
//   };
// }
