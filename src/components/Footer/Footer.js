import React from 'react';
import styles from './Footer.module.scss';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <AppBar position="fixed" className={styles.footer}>
      <Toolbar>
        <Typography align="center" className="fullWidth">
          <em>
            <span className={styles.copyleft}>&copy;</span> Copyleft 2021 ⚡
            Fasthomas - If you want real SF with depth, try DUNE instead
          </em>
          <span className={styles.emoji}> 😉</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export { Footer };
