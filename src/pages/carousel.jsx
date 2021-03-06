import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import clsx from "clsx";
import React from "react";
import Features from "../components/feature";
import PageHead from "../components/head";
import styles from "./commonStyles.module.css";

const features = [
  {
    title: <>Easy to Use</>,
    description: (
      <>
        It as good as using plain HTML tags. It has attributes to define its
        behaviour.
      </>
    ),
  },
  {
    title: <>Light Weight</>,
    description: (
      <>
        It is very light weight it adds just 1.2 kb of load on to your
        javascript bundle. Also it does not use any third party utility library
        like jquery or lodash
      </>
    ),
  },
  {
    title: <>Framework agnostic</>,
    description: (
      <>
        Since its a web component it does not depend on any javascript framework
        or library. It works as far as you want it to be statically rendered
      </>
    ),
  },
];

export default function Carousel() {
  return (
    <Layout>
      <PageHead
        title="Carousel Component"
        description="A framework agnostic, Next Gen, light weight, touch friendly carousel compoent"
      />
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Carousel Web Component</h1>
          <p className="hero__subtitle">
            A tiny(1.2Kb), framework agnostic, light weight, zero dependancy,
            touch friendly carousel components
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/carousel/introduction")}
            >
              Go to Documentation
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && <Features features={features} />}
      </main>
    </Layout>
  );
}
