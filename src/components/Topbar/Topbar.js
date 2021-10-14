import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Container,
  FormControlLabel,
  Switch,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core';
import styles from './Topbar.module.scss';

const Topbar = () => {
  return (
    <AppBar position="sticky" className={styles.appBar}>
      <Toolbar>
        <Container className="flex alignCenter spaceBetween">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/fastswapi.png`}
              alt="Fastswapi"
              className={styles.logo}
            />
          </Link>
          <Typography variant="h1" align="center">
            The Star Wars API viewer
          </Typography>
          <Tooltip title="Paid feature">
            <FormControlLabel
              control={<Switch color="primary" />}
              label="Wookie"
              className={styles.switch}
              disabled
            />
          </Tooltip>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export { Topbar };
