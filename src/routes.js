// import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createStackNavigator } from 'react-navigation-stack';
// import { AntDesign } from '@expo/vector-icons';
import Feed from './pages/Feed';
// import ProfileMain from './pages/Perfils/ProfileMain';
// import ProfileDetail from './pages/Perfils/ProfileDetail';
import Emojis from './pages/Emojis';
import RaioX from './pages/RaioX';

export default () =>
  createAppContainer(
    createBottomTabNavigator(
      {
        Feed,
        RaioX,
        Emojis,
        /* Perfils: {
          screen: createStackNavigator({
            ProfileMain,
            ProfileDetail,
          }),
          navigationOptions: {
            tabBarLabel: 'Perfils',
            tabBarIcon: ({ tintColor }) => (
              <AntDesign name="team" size={20} color={tintColor} />
            ),
          },
        }, */
      },
      {
        tabBarOptions: {
          keyboardHidesTabBar: true,
          activeTintColor: 'rgb(246, 80, 102)',
          inactiveTintColor: 'rgba(0,0,0,0.6)',
          style: {
            backgroundColor: '#fff',
            borderTopColor: '#fff',
          },
        },
      },
    ),
  );
