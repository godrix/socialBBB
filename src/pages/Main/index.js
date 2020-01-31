import React, { useEffect, useState } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { Keyboard, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { MaterialIcons } from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import {
  Map,
  Img,
  Balloon,
  ImageCallout,
  ImageLocal,
  AlertName,
  Description,
  Created,
  ContainerSearch,
  InputSearch,
  ButtonSearch,
} from './styles';

const styles = StyleSheet.create({
  shadow: {
    elevation: 5,
  },
});

export default function Main() {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [keyboardDisplay, setKeyboardDisplay] = useState(false);

  function _keyboardDidShow() {
    setKeyboardDisplay(true);
  }

  function _keyboardDidHide() {
    setKeyboardDisplay(false);
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentPosition({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentPosition) {
    return null;
  }
  return (
    <>
      <Map initialRegion={currentPosition}>
        <Marker coordinate={{ latitude: -26.911508, longitude: -48.688305 }}>
          <Img
            source={{
              uri:
                'https://avatars3.githubusercontent.com/u/5671881?s=400&u=b7f7d529bd60d4b492127f7703d26f74783ee37e&v=4',
            }}
          />
          <Callout>
            <Balloon>
              <ImageCallout>
                <ImageLocal
                  source={{
                    uri:
                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzG3uSaDtqEPKF1EylmE3PcJA1Uv3M_8ixy8g6fVGvAml-J3jXQ&s',
                  }}
                />
              </ImageCallout>
              <AlertName>Burraco</AlertName>
              <Description>Cuidado burraco na via</Description>
              <Created>Há 12 min</Created>
            </Balloon>
          </Callout>
        </Marker>
        <Marker
          coordinate={{
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
          }}
        />
      </Map>
      <ContainerSearch keyboard={keyboardDisplay}>
        <InputSearch
          placeholder="Pesquise por lojas, restau..."
          style={styles.shadow}
        />
        <ButtonSearch style={styles.shadow}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </ButtonSearch>
      </ContainerSearch>
    </>
  );
}

Main.navigationOptions = ({ navigation }) => ({
  title: false,
  headerLeft: () => (
    <Image source={logo} style={{ width: 200, height: 50, marginLeft: 10 }} />
  ),
  headerRight: () => (
    <TouchableOpacity
      style={{ marginRight: 25 }}
      hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
      onPress={() => {
        navigation.navigate('NewPoint');
      }}>
      <MaterialIcons name="add-circle-outline" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
