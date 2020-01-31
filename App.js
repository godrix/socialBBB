import React from 'react';
import { StatusBar } from 'react-native';
import createRouter from './src/routes';

export default function App() {
  const Routes = createRouter();

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0956A7" />
      <Routes />
    </>
  );
}
