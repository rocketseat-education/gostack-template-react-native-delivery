import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import Routes from './routes';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="light-content" />
    <Routes />
  </View>
);

export default App;
