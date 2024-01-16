import { Typography } from '@mui/material';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <Typography align="center" className={styles.loader}>
      Loading...
    </Typography>
  );
};

export { Loader };
