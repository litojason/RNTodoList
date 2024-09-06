import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {InitialStackParamList} from '../types/navigation.types';
import LoginScreen from '../screens/initial/Login';
import RegisterScreen from '../screens/initial/Register';

const Stack = createNativeStackNavigator<InitialStackParamList>();

const InitialStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default InitialStack;
