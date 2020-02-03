import React, { useState } from 'react';
import { TouchableOpacity, Modal, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import boom from '../../assets/boom.jpg';
import love from '../../assets/love.jpg';
import Background from '../../components/Background';
import Queridometro from '../../components/Queridometro';
import {
  Container,
  Title,
  SubTitle,
  ModalBrother,
  HeaderModal,
  BodyModal,
  Avatar,
  DisplayName,
  NameBrother,
  LabelQueridometro,
  MiniCard,
  Mini,
  Emoji,
  LabelEmoji,
  Received,
  ContainerReceived,
  AvatarReceived,
  EmojiDetail,
  BoxAvatarReceived,
} from './styles';

export default function Emojis() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Background>
      <Container>
        <Title>Queridômetro</Title>
        <SubTitle>Emojis recebidos - 30/01</SubTitle>
        <Queridometro
          action={() => {
            setModalVisible(true);
          }}
        />
      </Container>
      <ModalBrother visible={modalVisible}>
        <View style={{ marginTop: 22 }}>
          <HeaderModal>
            <Avatar
              source={{
                uri:
                  'https://d1izikxk6qog.cloudfront.net/cdn/brothers/medias/1842cc74-81cc-4824-a2a5-0ec8660a78bd.png',
              }}
            />
            <DisplayName>
              <NameBrother>Lucas</NameBrother>
              <LabelQueridometro>Queridometro</LabelQueridometro>
            </DisplayName>
          </HeaderModal>
          <TouchableOpacity
            style={{ position: 'absolute', right: 25, top: 15 }}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <AntDesign name="closecircleo" size={45} color="#fff" />
          </TouchableOpacity>
          <MiniCard>
            <Mini style={{ elevation: 5 }}>
              <Emoji source={love} />
              <LabelEmoji>Emoji que mais recebi</LabelEmoji>
            </Mini>
            <Mini style={{ elevation: 5 }}>
              <Emoji source={boom} />
              <LabelEmoji>Emoji que menos recebi</LabelEmoji>
            </Mini>
          </MiniCard>
          <BodyModal>
            <Received>Recebidos</Received>
            <ContainerReceived>
              <BoxAvatarReceived>
                <AvatarReceived
                  source={{
                    uri:
                      'https://d1izikxk6qog.cloudfront.net/cdn/brothers/medias/94b07cf5-0e96-4ca3-a921-5ea1b7939b53.png',
                  }}
                />
                <EmojiDetail source={love} />
              </BoxAvatarReceived>
              <BoxAvatarReceived>
                <AvatarReceived
                  source={{
                    uri:
                      'https://d1izikxk6qog.cloudfront.net/cdn/brothers/medias/de7dab93-5b1b-41a2-984b-bd415b870dae.png',
                  }}
                />
                <EmojiDetail source={love} />
              </BoxAvatarReceived>
              <BoxAvatarReceived>
                <AvatarReceived
                  source={{
                    uri:
                      'https://d1izikxk6qog.cloudfront.net/cdn/brothers/medias/ee05a315-bee2-4bf8-9a46-0e33de44bdbd.png',
                  }}
                />
                <EmojiDetail source={boom} />
              </BoxAvatarReceived>
            </ContainerReceived>
          </BodyModal>
        </View>
      </ModalBrother>
    </Background>
  );
}

Emojis.navigationOptions = {
  tabBarLabel: 'Emojis',
  tabBarIcon: ({ tintColor }) => (
    <AntDesign name="smileo" size={20} color={tintColor} />
  ),
};
