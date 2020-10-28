import React from 'react';

import LeftColumn from '../LeftColumn';
import RightColumn from '../RightColumn';
import MiddleColumn from '../MiddleColumn';

import { Container } from './styles';

const Layout: React.FC = () => {
  return (
    <Container>
      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
