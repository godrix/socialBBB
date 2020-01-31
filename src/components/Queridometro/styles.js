import styled from 'styled-components/native';

export const Container = styled.View`
  background: rgb(255, 255, 255);
  border-radius: 5px;
  margin: 3%;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.Image`
  margin-top: 15px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const Body = styled.View`
  flex-direction: row-reverse;
`;
export const ContainerEmoji = styled.View`
  align-items: center;
  margin-top: 15px;
  margin: 3px;
`;
export const Emoji = styled.Image`
  width: 50px;
  height: 50px;
`;
export const LabelEmoji = styled.Text`
  color: rgb(102, 102, 102);
  font-size: 16px;
`;
