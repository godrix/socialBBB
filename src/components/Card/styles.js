import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.View`
  background: #f5f6fa;
  border-radius: 5px;
  margin: 3%;
  padding: 5%;
`;

export const AvatarInfoDisplay = styled.View`
  margin-left: 15px;
  margin-bottom: 15px;
`;

export const AvatarInfo = styled.View`
  flex-direction: row;
`;
export const AvatarImage = styled.Image`
  border-radius: 25px;
`;
export const AvatarName = styled.Text`
  color: rgb(255, 81, 81);
  font-weight: bold;
  font-size: 18px;
`;
export const Time = styled.Text`
  color: rgb(102, 102, 102);
`;
export const Banner = styled(LinearGradient).attrs(props => ({
  colors: props.onus
    ? ['rgb(254, 27, 96)', 'rgb(232, 29, 29)']
    : ['rgb(0, 220, 81)', 'rgb(0, 220, 205)'],
}))`
  flex-direction: row;
  padding: 15px;
  border-radius: 10px;
`;
export const BannerImage = styled.Image`
  margin-top: 15px;
  width: 60px;
  height: 60px;
`;
export const BannerInfo = styled.View`
  margin-left: 15px;
`;
export const BannerText = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  width: 80%;
`;
export const BannerHash = styled.Text`
  color: #fff;
`;
export const Buttons = styled.View`
  flex-direction: row;
  text-align: center;
  justify-content: space-around;
`;
export const Button = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 15px;
`;
export const TextButton = styled.Text`
  margin-left: 15px;
`;
