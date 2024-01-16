// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './routes/MainStack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <MainStack/>
    </NavigationContainer>
  );
};

export default App;
