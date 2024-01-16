import { Topbar } from '../components/Topbar/Topbar';
import { Footer } from '../components/Footer/Footer';
import Container from '@mui/material/Container';
import { PropsWithChildren } from 'react';
import styles from './MainLayout.module.scss';

const MainLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Topbar />
      <Container className={styles.main}>
        {props.children}
      </Container>
      <Footer />
    </>
  );
}

export { MainLayout };
