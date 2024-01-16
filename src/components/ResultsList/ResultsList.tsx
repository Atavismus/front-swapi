import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  IconButton,
  Typography,
  Tooltip,
} from '@mui/material';
import styles from './ResultsList.module.scss';
import { getIdFromUrl, getPageFromUrl } from '../../helpers/url';
import {
  ArrowBackIos as Prev,
  ArrowForwardIos as Next,
} from '@mui/icons-material';

const ResultsList = (props) => {
  const {
    data,
    resource,
    count,
    prevPage = null,
    nextPage = null,
    currentResult,
    onResultClick,
  } = props;
  const renderPagination = (direction) => {
    const disabled =
      (direction === 0 && prevPage === null) ||
      (direction === 1 && nextPage === null);
    if (disabled) {
      return (
        <IconButton
          disabled
          className={`${styles.pagination} ${styles.disabled}`}
        >
          {direction === 0 ? <Prev /> : <Next />}
        </IconButton>
      );
    } else {
      const to =
        direction === 0
          ? getPageFromUrl(resource, prevPage)
          : getPageFromUrl(resource, nextPage);
      return (
        <Tooltip title={direction === 0 ? 'Previous results' : 'Next results'}>
          <Link to={to} className={styles.pagination}>
            <IconButton>{direction === 0 ? <Prev /> : <Next />}</IconButton>
          </Link>
        </Tooltip>
      );
    }
  };

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
              className={`${styles.result} ${currentResult === id && styles.on
                }`}
            >
              {resource === 'films' ? element.title : element.name}
            </Button>
          );
        })
      ) : (
        <p>No data</p>
      )}
      <div>
        {renderPagination(0)}
        {renderPagination(1)}
      </div>
    </Container>
  );
};

export { ResultsList };
