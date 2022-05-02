import type { PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage: React.FC<PageProps> = () => (
  <Layout selectedCategory='map'>
    <Seo />
  </Layout>
);

export default IndexPage;
