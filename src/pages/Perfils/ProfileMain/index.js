import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { Container } from './styles';

export default function ProfileMain() {
  return <AntDesign name="home" size={50} />;
}

ProfileMain.navigationOptions = {
  title: `ola mundo`,
};
