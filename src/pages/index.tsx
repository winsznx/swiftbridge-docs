import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Seamless crypto bridge on Base network">
      <HomepageHeader />
      <main>
        <div className="container" style={{padding: '2rem 0'}}>
          <div className="row">
            <div className="col col--4">
              <h3>🤖 Telegram Bot</h3>
              <p>Easy commands for buying, selling, and sending crypto</p>
            </div>
            <div className="col col--4">
              <h3>🎨 Web Mini App</h3>
              <p>Beautiful interface with wallet connection</p>
            </div>
            <div className="col col--4">
              <h3>🔗 Smart Contracts</h3>
              <p>Open-source contracts on Base network</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
