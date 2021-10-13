import React from 'react';
import { Topbar } from '../components/Topbar/Topbar';
import { FastLinks } from '../components/FastLinks/FastLinks';
import { Footer } from '../components/Footer/Footer';

function MainLayout(props) {
  return (
    <>
      <Topbar />
      <FastLinks />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}

export { MainLayout };
