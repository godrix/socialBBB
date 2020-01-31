import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  height: 100px;
  align-items: center;
  margin: 5px;
  padding: 5px;
`;

export const StyleStorie = styled(LinearGradient).attrs({
  colors: ['#FF5250', '#FFC202'],
})`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  align-items: center;
`;

export const Avatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  margin-top: 3px;
  width: 65px;
  height: 65px;
  border-radius: 50px;
`;

export const UserName = styled.Text.attrs({
  numberOfLines: 1,
})`
  margin-top: 5px;
  width: 70px;
  color: rgb(255, 81, 81);
  text-align: center;
`;
