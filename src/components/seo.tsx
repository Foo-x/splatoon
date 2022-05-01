/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';
import { SeoQuery } from 'graphql-types';
import React from 'react';
import { Helmet } from 'react-helmet';

type Props = {
  description?: string;
  lang?: string;
  meta?: JSX.IntrinsicElements['meta'][];
  title?: string;
};

const Seo: React.FC<Props> = ({
  description,
  lang = 'ja',
  meta = [],
  title,
}) => {
  const { site, ogp } = useStaticQuery<SeoQuery>(
    graphql`
      query Seo {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
        ogp: file(
          sourceInstanceName: { eq: "images" }
          relativePath: { eq: "ogp.png" }
        ) {
          publicURL
        }
      }
    `
  );

  const metaDescription = description ?? site?.siteMetadata?.description ?? '';
  const defaultTitle = site?.siteMetadata?.title ?? '';
  const actualTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const ogpImage =
    site?.siteMetadata?.siteUrl && ogp?.publicURL
      ? site.siteMetadata.siteUrl + ogp.publicURL
      : '';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={actualTitle}
      meta={[
        ...[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: actualTitle,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            property: `og:image`,
            content: ogpImage,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
        ],
        ...meta,
      ]}
    />
  );
};

export default Seo;
