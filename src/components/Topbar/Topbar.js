import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  FormControlLabel,
  Switch,
  Toolbar,
  Typography,
} from '@material-ui/core';
import styles from './Topbar.module.scss';

const Topbar = () => {
  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar className={styles.toolBar}>
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/fastswapi.png`}
            alt="Fastswapi"
            className={styles.logo}
          />
        </Link>
        <Typography variant="h1">The Star Wars API viewer</Typography>
        <FormControlLabel
          control={<Switch color="primary" />}
          label="Wookie"
          className={styles.switch}
        />
      </Toolbar>
    </AppBar>
  );
};

export { Topbar };
