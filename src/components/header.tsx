import { Link } from 'gatsby';
import React from 'react';
import * as styles from '../styles/components/header.module.css';

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.headingWrapper}>
      <h1 className={styles.heading}>
        <Link to='/' className={styles.link}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
