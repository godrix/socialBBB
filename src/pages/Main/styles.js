import styled from 'styled-components/native';
import MapView from 'react-native-maps';
import { BaseButton } from 'react-native-gesture-handler';

export const Map = styled(MapView)`
  flex: 1;
`;

export const Img = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const Balloon = styled.View`
  width: 260px;
`;

export const ImageCallout = styled.Text`
  width: 200px;
  height: 100px;
`;

export const ImageLocal = styled.Image`
  width: 200px;
  height: 100px;
`;

export const AlertName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Description = styled.Text``;

export const Created = styled.Text`
  color: #ccc;
`;

export const ContainerSearch = styled.View`
  position: absolute;
  bottom: ${props => (props.keyboard ? '300px' : '30px')};
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const InputSearch = styled.TextInput.attrs({
  placeholderTextColor: '#999',
  autoCapitalize: 'words',
})`
  flex: 1;
  height: 50px;
  background: #fff;
  border-radius: 50px;
  font-size: 16px;
  padding-left: 25px;
  box-shadow: 10px 5px 5px #000;
`;

export const ButtonSearch = styled(BaseButton)`
  width: 50px;
  height: 50px;
  background: #0956a7;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
