import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import styles from './ResultsList.module.scss';
import { getIdFromUrl } from '../../helpers/url';

const ResultsList = (props) => {
  const { data, resource, count, currentResult, onResultClick } = props;
  return (
    <Container className="center gutter">
      <Typography className={styles.title}>
        {count} result{count > 0 ? 's:' : '.'}
      </Typography>
      {data ? (
        data.map((element) => {
          const id = getIdFromUrl(element.url);
          return (
            <Button
              key={id}
              value={id}
              variant="outlined"
              onClick={onResultClick}
              className={`${styles.result} ${
                currentResult === id && styles.on
              }`}
            >
              {resource === 'films' ? element.title : element.name}
            </Button>
          );
        })
      ) : (
        <p>No data</p>
      )}
    </Container>
  );
};

export { ResultsList };
