import React from 'react';
import { ImageBackground } from 'react-native';
import bg from '../../assets/bg-bolinhas.png';

export default function Background({ children }) {
  return (
    <ImageBackground source={bg} style={{ width: '100%', height: '100%' }}>
      {children}
    </ImageBackground>
  );
}
