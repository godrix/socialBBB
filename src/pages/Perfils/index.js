import React from 'react';
import { View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import { Container } from './styles';

export default function Perfils() {
  return <View />;
}

Perfils.navigationOptions = {
  tabBarLabel: 'Perfils',
  tabBarIcon: ({ tintColor }) => (
    <AntDesign name="team" size={20} color={tintColor} />
  ),
};
