import * as React from "react";
import { graphql } from "gatsby";
import * as Components from "../sections";
import Layout from "../components/layout";
import Page from "../components/page";
import DevDebug from "../components/dev-debug";

export default function LandingPage(props) {
  const { sections } = props.data.contentfulLandingPage;

  return (
    <Layout {...props.data.contentfulLandingPage}>
      <Page>
        {sections.map((section) => {
          const Component =
            Components[section.internal.type.replace("Contentful", "")] ||
            DevDebug;
          return Component ? <Component key={section.id} {...section} /> : null;
        })}
      </Page>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    contentfulLandingPage(id: { eq: $id }) {
      title
      description
      image {
        file {
          url
        }
      }
      sections {
        ...HeroFragment
        ...FeaturesFragment
        ...BenefitsFragment
        ...TestimonialsFragment
        ...CallToActionFragment
        # id
        # component
        # heading
        # secondaryHeading
        # content {
        #   id
        #   primaryText {
        #     childMarkdownRemark {
        #       html
        #     }
        #   }
        #   secondaryText {
        #     childMarkdownRemark {
        #       html
        #     }
        #   }
        #   image {
        #     gatsbyImageData(layout: CONSTRAINED)
        #     title
        #   }
        #   avatar: image {
        #     gatsbyImageData(layout: FIXED, width: 48, height: 48)
        #     title
        #   }
        #   links {
        #     id
        #     href
        #     text
        #   }
        # }
        # body {
        #   body
        # }
        # sys {
        #   contentType {
        #     sys {
        #       id
        #     }
        #   }
        # }
      }
    }
  }
`;
