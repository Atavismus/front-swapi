import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';
import styles from './FastLinks.module.scss';
import { ICONS } from '../../config/constants';

const FastLinks = () => {
  return (
    <div className={styles.fastLinks}>
      {routes
        .filter(
          (element) => !element.path.includes(':id') && element.path !== '/'
        )
        .map((route, i) => (
          <Link to={route.path} key={i}>
            {ICONS[route.path.slice(1)]}
            {route.path.slice(1).toUpperCase()}
          </Link>
        ))}
    </div>
  );
};

export { FastLinks };
