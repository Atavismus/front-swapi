import React from 'react';
import styles from './Footer.module.scss';
import { AppBar, Container, Toolbar } from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position="fixed" className={styles.footer}>
      <Toolbar>
        <Container className="center">
          <em>
            <span className={styles.copyleft}>&copy;</span> Copyleft 2021 ⚡
            Fasthomas - If you want real SF with depth, try DUNE instead
          </em>
          <span className={styles.emoji}> 😉</span>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export { Footer };
