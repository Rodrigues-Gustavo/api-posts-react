import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 2px;
    padding: 10px;
    border-radius: 8px;
    color: #c400fa;
`;

const Title = styled.h3`
    text-transform: capitalize;
`;

const Post = ({ item }) => {
  return (
    <Container>
        <Title>{item.title}</Title>
        <span>{item.body}</span>
    </Container>
  )
}

export default Post;