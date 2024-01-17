import { Link } from 'react-router-dom';
import {
  Box,
  Tooltip,
} from '@mui/material';
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
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
    onResultClick
  } = props;
  const renderPagination = (direction) => {
    const disabled =
      (direction === 0 && prevPage === null) ||
      (direction === 1 && nextPage === null);
    if (disabled) {
      return (
        <Button disabled className={styles.pagination}>{direction === 0 ? <Prev /> : <Next />}</Button>
      );
    } else {
      const to =
        direction === 0
          ? getPageFromUrl(resource, prevPage)
          : getPageFromUrl(resource, nextPage);
      return (
        <>
          <Tooltip title={direction === 0 ? 'Previous results' : 'Next results'}>
            <Link to={to}>
              <Button className={styles.pagination}>{direction === 0 ? <Prev /> : <Next />}</Button>
            </Link>
          </Tooltip>
        </>

      );
    }
  };

  return (
    <Box sx={{ textAlign: 'center' }}>
      <div>
        <Badge
          noIcon
          severity="success"
        >
          {count} résultat{count > 0 ? 's' : ''}
        </Badge>
      </div>
      {data ? (
        data.map((element) => {
          const id = getIdFromUrl(element.url);
          return (
            <Tag
              key={id}
              nativeButtonProps={{
                value: id,
                onClick: onResultClick
              }}
              className={`${styles.result} ${currentResult === id && styles.on}`}
            >
              {resource === 'films' ? element.title : element.name}
            </Tag>
          );
        })
      ) : (
        <p>No data</p>
      )}
      <div>
        {renderPagination(0)}
        {renderPagination(1)}
      </div>
    </Box>
  );
};

export { ResultsList };
