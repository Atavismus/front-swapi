import { Link } from 'react-router-dom';
import {
  Box,
  Tooltip,
} from '@mui/material';
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { Button } from "@codegouvfr/react-dsfr/Button";
import { Tag } from "@codegouvfr/react-dsfr/Tag";
import { Loader } from '../Loader/Loader';
import styles from './ResultsList.module.scss';
import { getIdFromUrl, getPageFromUrl, getPageNumberFromUrl } from '../../helpers/url';
import {
  ArrowBackIos as Prev,
  ArrowForwardIos as Next,
} from '@mui/icons-material';
import { Resource, ResourceButFilm } from '../../types';
import { IFilm } from '../../classes/Film';
import { RESULTS_PER_PAGE } from '../../config/constants';

interface ResultsListProps {
  data: Resource[],
  fetching: boolean,
  resource: string,
  count: number,
  prevPage: string,
  nextPage: string | null,
  currentResult: number,
  onResultClick: Function,
}

const ResultsList = (props: ResultsListProps) => {
  const {
    data,
    fetching,
    resource,
    count,
    prevPage = null,
    nextPage = null,
    currentResult,
    onResultClick
  } = props;
  const renderPagination = (direction: number) => {
    const disabled =
      (direction == 0 && prevPage === null) ||
      (direction == 1 && nextPage === null);
    if (disabled) {
      return (
        <Button disabled className={styles.pagination}>{direction == 0 ? <Prev /> : <Next />}</Button>
      );
    } else {
      const to =
        direction === 0
          ? getPageFromUrl(resource, prevPage)
          : getPageFromUrl(resource, nextPage);
      return (
        <>
          <Tooltip title={direction === 0 ? 'Previous results' : 'Next results'}>
            <Link to={to} className={styles.lien}>
              <Button className={styles.pagination}>{direction === 0 ? <Prev /> : <Next />}</Button>
            </Link>
          </Tooltip>
        </>

      );
    }
  };
  const renderPageInfo = () => {
    const currentPage = getPageNumberFromUrl();
    return (
      <>{currentPage ? currentPage : 1} / {Math.ceil(count / RESULTS_PER_PAGE)}</>
    );
  }

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
        data.map((element: Resource) => {
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
              {resource === 'films' ? (element as IFilm).title : (element as ResourceButFilm).name}
            </Tag>
          );
        })
      ) : (
        <p>No data</p>
      )}
      <div>
        {renderPagination(0)}
        {
          fetching
            ? <>Chargement</>
            : <>{renderPageInfo()}</>
        }
        {renderPagination(1)}
      </div>
    </Box>
  );
};

export { ResultsList };
