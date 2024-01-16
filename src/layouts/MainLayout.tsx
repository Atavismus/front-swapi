import { Topbar } from '../components/Topbar/Topbar';
import { Footer } from '../components/Footer/Footer';
import Container from '@mui/material/Container';
import { PropsWithChildren } from 'react';

const MainLayout = (props: PropsWithChildren) => {
  return (
    <>
      <Topbar />
      <Container maxWidth={false}>
        {props.children}
      </Container>
      <Footer />
    </>
  );
}

export { MainLayout };
