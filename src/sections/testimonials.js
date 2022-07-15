import React from "react";
import { graphql } from "gatsby";
import * as styles from "./testimonials.module.css";
import Section from "../components/section";
import Heading from "../components/heading";
import MarkdownText from "../components/markdown-text";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Testimonials({ heading, testimonials }) {
  return (
    <Section>
      <Heading center>{heading}</Heading>
      <div className={styles.content}>
        {testimonials.map((item) => (
          <TestimonialContent key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}

function TestimonialContent({ quote, name, image }) {
  if (!quote) return;

  return (
    <div className={styles.testimonial}>
      <MarkdownText as="blockquote" className={styles.quote} {...quote} />
      <div className={styles.author}>
        {image && (
          <div className={styles.avatar}>
            <GatsbyImage image={image.gatsbyImageData} alt={image.title} />
          </div>
        )}
        <cite as="cite" className={styles.authorInfo}>
          {name}
        </cite>
      </div>
    </div>
  );
}
export const query = graphql`
  fragment TestimonialsFragment on ContentfulTestimonials {
    id
    heading
    testimonials {
      id
      quote {
        childMarkdownRemark {
          html
        }
      }
      name
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
