import React from 'react';
import { Container, HelloText } from './styles';

const Hello: React.FC = () => {
  return (
    <Container>
      <HelloText>Hello World!</HelloText>
    </Container>
  );
};

export default Hello;
