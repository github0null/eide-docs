import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <div className={styles.button_margin}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Getting Start
            </Link>
          </div>
          <div className={styles.button_margin}>
            <Link
              className="button button--secondary button--outline button--lg"
              to="https://marketplace.visualstudio.com/items?itemName=CL.eide">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`}>
      <HomepageHeader/>
    </Layout>
  );
}
