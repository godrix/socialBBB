import React from 'react';
import { View } from 'react-native';
import Storie from './Storie';
import { Container, StoriesList, Hr } from './styles';

export default function Stories({ storieData }) {
  return (
    <Container>
      <StoriesList
        data={storieData}
        renderItem={({ item }) => <Storie data={item} />}
        keyExtractor={item => item.id}
      />
      <Hr />
    </Container>
  );
}
