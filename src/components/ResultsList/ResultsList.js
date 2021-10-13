import React from 'react';
import { Button, Typography } from '@mui/material';
import styles from './ResultsList.module.scss';

const ResultsList = (props) => {
  const { data, resource, count, currentResult, onResultClick } = props;
  console.log(data);
  return (
    <>
      <Typography paragraph align="center" className={styles.title}>
        {count} result{count > 0 ? 's:' : '.'}
      </Typography>
      <div className={styles.container}>
        {data ? (
          data.map((element, index) => (
            <Button
              key={index}
              value={index}
              variant="outlined"
              onClick={onResultClick}
              className={[
                styles.result,
                currentResult === index ? styles.on : null,
              ].join(' ')}
            >
              {resource === 'films' ? element.title : element.name}
            </Button>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
    </>
  );
};

export { ResultsList };
