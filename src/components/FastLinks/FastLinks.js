import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';
import Container from '@mui/material/Container';
import styles from './FastLinks.module.scss';
import { ICONS } from '../../config/constants';

const FastLinks = () => {
  return (
    <Container className={`${styles.fastLinks} center gutter`}>
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
    </Container>
  );
};

export { FastLinks };
