import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./benefits.module.css";
import MarkdownText from "../components/markdown-text";
import Section from "../components/section";
import Heading from "../components/heading";

export default function Benefits({ heading, secondaryHeading, benefits }) {
  return (
    <Section>
      <Heading center>{heading}</Heading>
      <Heading secondary center className={styles.secondaryHeading}>
        {secondaryHeading}
      </Heading>
      <div className={styles.content}>
        {benefits.map((item) => (
          <BenefitContent key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}

function BenefitContent({ heading, body, image = [] }) {
  return (
    <div className={styles.contentCard}>
      {image && (
        <GatsbyImage
          image={image.gatsbyImageData}
          alt={image.title || heading}
          className={styles.contentImage}
        />
      )}
      <h3 className={styles.contentHeading}> {heading}</h3>
      <MarkdownText {...body} />
    </div>
  );
}
export const query = graphql`
  fragment BenefitsFragment on ContentfulBenefits {
    id
    heading
    secondaryHeading
    benefits {
      id
      heading
      body {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData
        title
      }
    }
    internal {
      type
    }
  }
`;
