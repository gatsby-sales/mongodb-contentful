import * as React from "react";
import { graphql } from "gatsby";
import * as styles from "./call-to-action.module.css";
import Button from "../components/button";
import Section from "../components/section";
import Heading from "../components/heading";

export default function CallToAction({ heading, secondaryHeading, links }) {
  return (
    <Section className={styles.root}>
      <Heading center>{heading}</Heading>
      <Heading secondary center>
        {secondaryHeading}
      </Heading>
      <div>{links && <Content links={links} />}</div>
    </Section>
  );
}

function Content({ links = [] }) {
  return (
    <div className={styles.content}>
      <div className={styles.buttons}>
        {links && links.map((link) => <Button key={link.id} {...link} />)}
      </div>
    </div>
  );
}
export const query = graphql`
  fragment CallToActionFragment on ContentfulCallToAction {
    heading
    secondaryHeading
    id
    links {
      text
      href
      id
    }
    internal {
      type
    }
  }
`;
