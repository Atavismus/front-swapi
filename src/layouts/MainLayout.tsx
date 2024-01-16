import { Topbar } from '../components/Topbar/Topbar';
import { Footer } from '../components/Footer/Footer';
import Container from '@mui/material/Container';

function MainLayout(props) {
  return (
    <>
      <Topbar />
      <Container maxWidth={false} className="content">
        {props.children}
      </Container>
      <Footer />
    </>
  );
}

export { MainLayout };
