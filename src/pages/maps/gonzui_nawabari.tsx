import { graphql, Link, PageProps, useStaticQuery } from 'gatsby';
import { GonzuiNawabariQuery } from 'graphql-types';
import React from 'react';
import Layout from '~/components/layout';
import MapCanvas from '~/components/mapCanvas';
import Seo from '~/components/seo';

const GonzuiNawabari: React.FC<PageProps> = () => {
  const data = useStaticQuery<GonzuiNawabariQuery>(graphql`
    query GonzuiNawabari {
      path: file(
        sourceInstanceName: { eq: "models" }
        relativePath: { eq: "gonzui_nawabari.glb" }
      ) {
        publicURL
      }
    }
  `);

  return (
    <Layout>
      <Seo title='ゴンズイ地区（ナワバリ）' />
      <MapCanvas
        modelPath={data.path?.publicURL ?? ''}
        cameraPosition={[75, 30, 10]}
        cameraTarget={[45, 0, 0]}
        intensityFrontLeft={0.4}
        intensityFrontRight={0.1}
        intensityBackLeft={0.2}
        intensityBackRight={0.5}
      />
      <Link to='/'>Go back to the homepage</Link>
    </Layout>
  );
};

export default GonzuiNawabari;
