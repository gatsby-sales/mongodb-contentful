import * as React from "react";
import * as styles from "./hero.module.css";
import { GatsbyImage } from "gatsby-plugin-image";
import Section from "../components/section";
import Button from "../components/button";
import MarkdownText from "../components/markdown-text";
import Heading from "../components/heading";
import { graphql } from "gatsby";

export default function Hero({ h1, h2, image, links, body }) {
  return (
    <Section>
      <div className={styles.root}>
        <div className={styles.content}>
          <Heading as="h2" className={styles.secondaryHeading}>
            {h2}
          </Heading>
          <Heading as="h1" className={styles.heading}>
            {h1}
          </Heading>
          <MarkdownText {...body} />
          <div className={styles.buttonContainer}>
            {links.map((link, i) => (
              <Button
                key={link.id}
                {...link}
                variant={i === 0 ? "primary" : "secondary"}
              />
            ))}
          </div>{" "}
        </div>
        <div className={styles.image}>
          <GatsbyImage
            image={image.gatsbyImageData}
            alt={image.title || `Hero Image`}
          />
        </div>
      </div>
    </Section>
  );
}

export const query = graphql`
  fragment HeroFragment on ContentfulHero {
    id
    h1
    h2
    body {
      body
    }
    links {
      href
      text
      id
    }
    image {
      title
      gatsbyImageData
    }
    internal {
      type
    }
  }
`;
