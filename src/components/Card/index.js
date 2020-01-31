import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import estalecas from '../../assets/estalecas.png';
import {
  Container,
  AvatarInfo,
  AvatarImage,
  AvatarName,
  AvatarInfoDisplay,
  Time,
  Banner,
  BannerImage,
  BannerInfo,
  BannerText,
  BannerHash,
  Buttons,
  Button,
  TextButton,
} from './styles';

export default function Card({ data }) {
  return (
    <Container style={{ elevation: 5 }}>
      <AvatarInfo>
        <AvatarImage
          style={{ width: 50, height: 50 }}
          source={{
            uri: data.img,
          }}
        />
        <AvatarInfoDisplay>
          <AvatarName>{data.name}</AvatarName>
          <Time>{data.time}</Time>
        </AvatarInfoDisplay>
      </AvatarInfo>
      <Banner onus={data.onus}>
        <BannerImage source={estalecas} />
        <BannerInfo>
          <BannerText>{data.text}</BannerText>
          <BannerHash>#RedeBBB #BBB20</BannerHash>
        </BannerInfo>
      </Banner>
      <Buttons>
        <Button>
          <AntDesign name="hearto" size={20} color="#000" />
          <TextButton>Curtir</TextButton>
        </Button>
        <Button>
          <AntDesign name="sharealt" size={20} color="#000" />
          <TextButton>Compartilhar</TextButton>
        </Button>
      </Buttons>
    </Container>
  );
}
