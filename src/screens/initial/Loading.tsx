import React from 'react';
import {ActivityIndicator} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Screen} from '../../components';

const LoadingScreen = () => {
  const {colors} = useTheme();

  return (
    <Screen
      style={{alignItems: 'center', justifyContent: 'center', padding: 16}}>
      <ActivityIndicator size="large" color={colors.primary} />
    </Screen>
  );
};

export default LoadingScreen;
