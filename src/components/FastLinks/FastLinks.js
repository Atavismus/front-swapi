import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../config/routes';
import Container from '@mui/material/Container';
import styles from './FastLinks.module.scss';
import { ICONS } from '../../config/constants';
import SearchIcon from '@mui/icons-material/Search';

const FastLinks = () => {
  return (
    <Container className={`${styles.fastLinks} center gutter`}>
      {routes
        .filter(
          (element) => !element.path.includes(':id') && element.path !== '/'
        )
        .map((route, i) => {
          const path = route.path;
          return (
            <Link to={path} key={i}>
              {path === '/search' ? <SearchIcon /> : ICONS[path.slice(1)]}
              {path.slice(1).toUpperCase()}
            </Link>
          );
        })}
    </Container>
  );
};

export { FastLinks };
