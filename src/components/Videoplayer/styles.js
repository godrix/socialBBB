import styled from 'styled-components/native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const Display = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;

export const DisplayInfo = styled(LinearGradient).attrs({
  colors: ['rgba(255,255,255,0)', 'rgba(0,0,0,0.5)'],
})`
  width: 200px;
  height: 150px;
  bottom: 0;
  margin-left: 60%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const VPlayer = styled(Video)`
  width: 100%;
  height: 800px;
  border-radius: 10px;
`;
export const NameBrother = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 23px;
  margin-top: 15px;
`;

export const Group = styled.Text`
  color: #fff;
  font-weight: bold;
  width: 30%;
  text-align: center;
  font-size: 18px;
  background: rgb(255, 81, 81);
  border-radius: 15px;
`;

export const Emojis = styled(LinearGradient).attrs({
  colors: ['rgba(255,255,255,0)', 'rgba(0,0,0,0.5)'],
})`
  border-radius: 5px;
`;
export const ContainerEmoji = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;
export const Emoji = styled.Image`
  width: 50px;
  height: 50px;
`;

export const LabelEmoji = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-left: 5px;
  font-weight: bold;
`;
