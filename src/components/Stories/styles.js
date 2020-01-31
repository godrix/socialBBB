import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 30px;
`;

export const StoriesList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hr = styled.View`
  background: rgb(235, 235, 235);
  height: 1px;
`;
