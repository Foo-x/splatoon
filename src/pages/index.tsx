import type { PageProps } from 'gatsby';
import React from 'react';
import NavTab from '~/components/navTab';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage: React.FC<PageProps> = () => (
  <Layout>
    <Seo title='Home' />
    <NavTab selectedCategory='map' />
  </Layout>
);

export default IndexPage;
