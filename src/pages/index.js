import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/designing-for-active-lifestyles">
            Explore Problem Statements
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A collection of real-world problem statements for designers and developers.">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--xl">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <p>
                These were inspired by the Stanford Design Institute based on how
                they teach Human-Computer Interaction. Feel free to re-use and come up with great stuff.
              </p>
              <p>
                This project aims to provide a well-organized collection of real-world problem statements that designers, developers, and product builders can use as case studies or inspiration for new products. Our goal is to create a valuable knowledge base for the community.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
