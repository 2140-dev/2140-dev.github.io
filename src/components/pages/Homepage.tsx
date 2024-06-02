import React from 'react';
import { About } from 'components/core/About/About';
import { Donate } from 'components/core/Donate/Donate';
import { Hero } from 'components/core/Hero/Hero';
import { Team } from 'components/core/Team/Team';
import { Header } from 'components/layouts/Header/Header';
import { MenuProvider } from 'providers/MenuProvider/MenuProvider';

export const Homepage = () => {
  return (
    <>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <div id="main">
        <Hero />
        <About />
        <Team />
        <Donate />
      </div>
    </>
  );
};
