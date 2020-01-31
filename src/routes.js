import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Feed from './pages/Feed';
import Perfils from './pages/Perfils';
import Emojis from './pages/Emojis';
import RaioX from './pages/RaioX';

export default () =>
  createAppContainer(
    createBottomTabNavigator(
      {
        Feed,
        RaioX,
        Emojis,
        Perfils,
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
