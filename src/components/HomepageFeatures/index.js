import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Website bearbeiten',
    Svg: require('@site/static/img/home/undraw_website.svg').default,
    description: (
      <>
        Lerne, wie du die Inhalte unserer Homepage bearbeiten kannst.
      </>
    ),
    link: '/docs/website'
  },
  {
    title: 'Account',
    Svg: require('@site/static/img/home/undraw_account.svg').default,
    description: (
      <>
        Wie du deinen Account erstellen und verwalten kannst.
      </>
    ),
    link: '/docs/account'
  },
  {
    title: 'Design',
    Svg: require('@site/static/img/home/undraw_design.svg').default,
    description: (
      <>
        Farben, Schriften, Icons - unser Design-System
      </>
    ),
    link: '/docs/design'
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <Link
          className="button button--secondary"
          to={link}>
          Lesen
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
