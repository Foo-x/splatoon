import { graphql, Link, useStaticQuery } from 'gatsby';
import { HeaderQuery } from 'graphql-types';
import React from 'react';
import * as styles from '../styles/components/header.module.css';

type Props = Record<string, never>;

const Header: React.FC<Props> = () => {
  const data = useStaticQuery<HeaderQuery>(graphql`
    query Header {
      logo: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "favicon.svg" }
      ) {
        publicURL
      }
    }
  `);

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.link}>
        <img
          className={styles.logo}
          src={data.logo?.publicURL ?? ''}
          alt='logo'
        />
      </Link>
    </header>
  );
};

export default Header;
