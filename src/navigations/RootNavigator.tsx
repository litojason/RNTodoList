import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {darkTheme, lightTheme} from '../utils';
import {useAppContext} from '../store/AppProvider';
import {getTheme, getToken} from '../lib/asyncStorage';
import LoadingScreen from '../screens/initial/Loading';
import InitialStack from './InitialStack';
import MainStack from './MainStack';

const RootNavigator = () => {
  const scheme = useColorScheme();
  const {token, setToken, theme, setTheme} = useAppContext();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleGetToken();
    handleGetTheme();
  }, []);

  const handleGetToken = () => {
    getToken()
      .then(data => {
        setToken(data);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
      });
  };

  const handleGetTheme = () => {
    getTheme()
      .then(data => setTheme(data))
      .catch(e => setTheme('system'));
  };

  const selectedTheme =
    theme === 'system'
      ? scheme === 'dark'
        ? darkTheme
        : lightTheme
      : theme === 'dark'
      ? darkTheme
      : lightTheme;

  return (
    <NavigationContainer theme={selectedTheme}>
      {isLoading ? <LoadingScreen /> : token ? <MainStack /> : <InitialStack />}
    </NavigationContainer>
  );
};

export default RootNavigator;
