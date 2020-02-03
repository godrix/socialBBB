import React from 'react';
import { TouchableOpacity } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import snake from '../../assets/snacke.jpg';
import hugo from '../../assets/hugo.jpg';
import smille from '../../assets/smille.jpg';
import hungry from '../../assets/hungry.jpg';
import boom from '../../assets/boom.jpg';
import love from '../../assets/love.jpg';

import {
  Container,
  Avatar,
  Body,
  ContainerEmoji,
  Emoji,
  LabelEmoji,
} from './styles';

export default function Queridometro({ action }) {
  return (
    <Container style={{ elevation: 5 }}>
      <Avatar
        source={{
          uri:
            'https://d1izikxk6qog.cloudfront.net/cdn/brothers/medias/1842cc74-81cc-4824-a2a5-0ec8660a78bd.png',
        }}
      />
      <TouchableOpacity
        style={{ position: 'absolute', right: 15, top: 15 }}
        onPress={() => {
          action();
        }}>
        <EvilIcons name="arrow-right" size={50} color="#ccc" />
      </TouchableOpacity>
      <Body>
        <ContainerEmoji>
          <Emoji source={love} />
          <LabelEmoji>5</LabelEmoji>
        </ContainerEmoji>
        <ContainerEmoji>
          <Emoji source={boom} />
          <LabelEmoji>5</LabelEmoji>
        </ContainerEmoji>
        <ContainerEmoji>
          <Emoji source={hungry} />
          <LabelEmoji>5</LabelEmoji>
        </ContainerEmoji>
        <ContainerEmoji>
          <Emoji source={smille} />
          <LabelEmoji>5</LabelEmoji>
        </ContainerEmoji>
        <ContainerEmoji>
          <Emoji source={hugo} />
          <LabelEmoji>5</LabelEmoji>
        </ContainerEmoji>
        <ContainerEmoji>
          <Emoji source={snake} />
          <LabelEmoji>5</LabelEmoji>
        </ContainerEmoji>
      </Body>
    </Container>
  );
}
