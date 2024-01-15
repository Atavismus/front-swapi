import React from 'react';
import { Topbar } from '../components/Topbar/Topbar';
import { FastLinks } from '../components/FastLinks/FastLinks';
import { Footer } from '../components/Footer/Footer';
import Container from '@mui/material/Container';

function MainLayout(props) {
  return (
    <>
      <Topbar />
      {/* <FastLinks />
      <Container maxWidth={false} className="content">
        {props.children}
      </Container>
      <Footer /> */}
    </>
  );
}

export { MainLayout };
