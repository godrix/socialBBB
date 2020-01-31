import React from 'react';

import { Container, Avatar, UserName, StyleStorie } from './styles';

export default function Storie({ data }) {
  return (
    <Container>
      <StyleStorie>
        <Avatar source={{ uri: data.img }} />
      </StyleStorie>
      <UserName>{data.name}</UserName>
    </Container>
  );
}
