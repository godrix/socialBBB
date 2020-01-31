import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  margin-top: 30px;
`;

export const Title = styled.Text`
  color: rgb(100, 100, 100);
  font-size: 35px;
  font-weight: bold;
  margin-left: 15px;
`;
export const SubTitle = styled.Text`
  color: rgb(145, 145, 145);
  font-size: 25px;
  margin-left: 15px;
`;

export const ModalBrother = styled.Modal.attrs({
  animationType: 'slide',
  transparent: true,
  presentationStyle: 'overFullScreen',
})``;

export const HeaderModal = styled(LinearGradient).attrs({
  colors: ['#FE564E', '#FEAF10'],
})`
  width: 100%;
  height: 200px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  flex-direction: row;
`;

export const BodyModal = styled.View`
  background: #fff;
  padding-top: 100px;
  height: 100%;
`;

export const Avatar = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  margin-left: 15px;
  margin-top: 30px;
`;
export const NameBrother = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-left: 15px;
  margin-top: 30px;
`;

export const LabelQueridometro = styled.Text`
  background: #ffbe9c;
  color: rgb(77, 77, 77);
  text-align: center;
  border-radius: 5px;
  margin-left: 15px;
`;

export const DisplayName = styled.View``;

export const MiniCard = styled.View`
  flex-direction: row;
  position: absolute;
  top: 160px;
  z-index: 2;
`;
export const Mini = styled.View`
  background: #fff;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100px;
  margin-left: 15px;
  border-radius: 10px;
`;
export const Emoji = styled.Image`
  width: 50px;
  height: 50px;
`;
export const LabelEmoji = styled.Text`
  color: rgb(246, 80, 102);
  font-weight: bold;
`;

export const Received = styled.Text`
  margin-left: 25px;
  font-weight: bold;
  font-size: 21px;
  color: rgb(102, 102, 102);
`;

export const ContainerReceived = styled.View`
  margin-left: 15px;
  margin-top: 15px;
  flex-direction: row;
  width: 80%;
`;

export const AvatarReceived = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const EmojiDetail = styled.Image`
  position: absolute;
  width: 35px;
  height: 35px;
  bottom: 0;
  left: 0;
`;
export const BoxAvatarReceived = styled.View`
  margin-left: 5px;
`;
