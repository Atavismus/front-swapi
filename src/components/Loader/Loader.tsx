import { Box, CircularProgress } from '@mui/material';
import styles from './Loader.module.scss';

interface ResultsListProps {
  pagination?: boolean
}

const Loader = ({ pagination = false }: ResultsListProps) => {
  return (
    !pagination ? (
      <Box display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh">
        <CircularProgress size="5rem" className={styles.loader} />
      </Box>
    ) : <CircularProgress size="2rem" className={styles.loader} />

  );
};

export { Loader };
