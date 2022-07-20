import * as React from "react";
import { graphql } from "gatsby";
import Section from "../../components/section";
import Layout from "../../components/layout";
import Page from "../../components/page";

import { GatsbyImage } from "gatsby-plugin-image";
export default function BlogPost(props) {
  const post = props.data.contentfulBlogPost;

  return (
    <Layout {...props.data.contentfulBlogPost}>
      <Page>
        <Section>
          {post.image && (
            <GatsbyImage
              image={post.image.gatsbyImageData}
              alt={post.image.description}
            />
          )}
          <h1>{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </Section>
      </Page>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        file {
          url
        }
        gatsbyImageData(width: 800)
        description
      }
    }
  }
`;
