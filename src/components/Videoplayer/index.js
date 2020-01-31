import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  VPlayer,
  Display,
  DisplayInfo,
  NameBrother,
  Emojis,
  Emoji,
  Group,
  LabelEmoji,
  ContainerEmoji,
} from './styles';
import snake from '../../assets/snacke.jpg';
import hugo from '../../assets/hugo.jpg';
import smille from '../../assets/smille.jpg';
import hungry from '../../assets/hungry.jpg';
import boom from '../../assets/boom.jpg';
import love from '../../assets/love.jpg';

export default function Videoplayer({ data }) {
  const [shouldPlay, setShouldPlay] = useState(false);

  function _handlePlayAndPause() {
    setShouldPlay(!shouldPlay);
  }

  return (
    <Container>
      <VPlayer
        source={{
          uri: data.videoUrl,
        }}
        rate={1.0}
        volume={1.0}
        resizeMode="cover"
        shouldPlay={shouldPlay}
      />
      <TouchableOpacity
        style={{ position: 'absolute' }}
        onPress={() => {
          _handlePlayAndPause();
        }}>
        <Feather name="play-circle" color="rgba(255,255,255,0.3)" size={180} />
      </TouchableOpacity>
      <Display>
        <Emojis>
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
        </Emojis>
        <DisplayInfo>
          <NameBrother>{data.name}</NameBrother>
          <Group>{data.group}</Group>
        </DisplayInfo>
      </Display>
    </Container>
  );
}
