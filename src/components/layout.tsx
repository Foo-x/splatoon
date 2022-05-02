import React from 'react';
import * as styles from '~/styles/components/layout.module.css';
import Header from './header';
import NavTab, { Category } from './navTab';

type Props = {
  selectedCategory: Category;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ selectedCategory, children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <NavTab selectedCategory={selectedCategory} />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
