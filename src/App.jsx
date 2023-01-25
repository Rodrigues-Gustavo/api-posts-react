import { useState, useMemo} from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { Post } from './components/Post';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 200px;
  padding-top: 30px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 80%;
`;

const App = () => {
  return (
    <Container>
      <Content></Content>
    </Container>
  )
}

export default App;
