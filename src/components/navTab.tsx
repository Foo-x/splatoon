import { graphql, Link, useStaticQuery } from 'gatsby';
import { NavTabQuery } from 'graphql-types';
import React, { useMemo } from 'react';
import * as styles from '~/styles/components/navTab.module.css';

const categories = ['map', 'memo', 'about'] as const;
export type Category = typeof categories[number];

type Props = {
  selectedCategory: Category;
};

const NavTab: React.FC<Props> = ({ selectedCategory }) => {
  const data = useStaticQuery<NavTabQuery>(graphql`
    query NavTab {
      map: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "map.svg" }
      ) {
        publicURL
      }
      mapActive: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "map_active.svg" }
      ) {
        publicURL
      }
      memo: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "memo.svg" }
      ) {
        publicURL
      }
      memoActive: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "memo_active.svg" }
      ) {
        publicURL
      }
      info: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "info.svg" }
      ) {
        publicURL
      }
      infoActive: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "info_active.svg" }
      ) {
        publicURL
      }
      circle: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "irregular_circle.svg" }
      ) {
        publicURL
      }
      splash: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "splash_circle.svg" }
      ) {
        publicURL
      }
    }
  `);

  const map = useMemo(() => {
    if (selectedCategory === 'map') {
      return (
        <li className={styles.elementActive}>
          <div className={styles.content}>
            <img
              className={styles.iconActive}
              src={data.mapActive?.publicURL ?? ''}
              alt='map'
              style={{
                backgroundImage: `url(${data.splash?.publicURL ?? ''})`,
              }}
            />
            <span>map</span>
          </div>
        </li>
      );
    }
    return (
      <li className={styles.elementInactive}>
        <div className={styles.content}>
          <img
            className={styles.iconInactive}
            src={data.map?.publicURL ?? ''}
            alt='map'
            style={{
              backgroundImage: `url(${data.circle?.publicURL ?? ''})`,
            }}
          />
          <span>map</span>
        </div>
      </li>
    );
  }, [
    data.circle?.publicURL,
    data.map?.publicURL,
    data.mapActive?.publicURL,
    data.splash?.publicURL,
    selectedCategory,
  ]);

  const memo = useMemo(() => {
    if (selectedCategory === 'memo') {
      return (
        <li className={styles.elementActive}>
          <Link to='memo' className={styles.content}>
            <img
              className={styles.iconActive}
              src={data.memoActive?.publicURL ?? ''}
              alt='memo'
              style={{
                backgroundImage: `url(${data.splash?.publicURL ?? ''})`,
              }}
            />
            <span>memo</span>
          </Link>
        </li>
      );
    }
    return (
      <li className={styles.elementInactive}>
        <Link to='memo' className={styles.content}>
          <img
            className={styles.iconInactive}
            src={data.memo?.publicURL ?? ''}
            alt='memo'
            style={{
              backgroundImage: `url(${data.circle?.publicURL ?? ''})`,
            }}
          />
          <span>memo</span>
        </Link>
      </li>
    );
  }, [
    data.circle?.publicURL,
    data.memo?.publicURL,
    data.memoActive?.publicURL,
    data.splash?.publicURL,
    selectedCategory,
  ]);

  const about = useMemo(() => {
    if (selectedCategory === 'about') {
      return (
        <li className={styles.elementActive}>
          <Link to='about' className={styles.content}>
            <img
              className={styles.iconActive}
              src={data.infoActive?.publicURL ?? ''}
              alt='about'
              style={{
                backgroundImage: `url(${data.splash?.publicURL ?? ''})`,
              }}
            />
            <span>about</span>
          </Link>
        </li>
      );
    }
    return (
      <li className={styles.elementInactive}>
        <Link to='about' className={styles.content}>
          <img
            className={styles.iconInactive}
            src={data.info?.publicURL ?? ''}
            alt='about'
            style={{
              backgroundImage: `url(${data.circle?.publicURL ?? ''})`,
            }}
          />
          <span>about</span>
        </Link>
      </li>
    );
  }, [
    data.circle?.publicURL,
    data.info?.publicURL,
    data.infoActive?.publicURL,
    data.splash?.publicURL,
    selectedCategory,
  ]);

  return (
    <ul className={styles.container}>
      {map}
      {memo}
      {about}
    </ul>
  );
};

export default NavTab;
