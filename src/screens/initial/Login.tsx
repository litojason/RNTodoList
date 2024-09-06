import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Config from 'react-native-config';

import {LoginNavProp} from '../../types/navigation.types';
import {LoginForm, Logo, Screen, ScreenTitle, Text} from '../../components';

const LoginScreen = ({navigation}: LoginNavProp) => {
  const {colors} = useTheme();

  return (
    <Screen
      isSafeArea
      style={{padding: 16, paddingBottom: 0, justifyContent: 'space-between'}}>
      <Logo mode="horizontal" />

      <View style={{gap: 16}}>
        <ScreenTitle
          title="Welcome!"
          description="Login to start managing Todo"
        />
        <LoginForm />

        {Config.ENV === 'development' && (
          <View>
            <Text>Env: {Config.ENV}</Text>
            <Text>{Config.API_URL}</Text>
          </View>
        )}
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          paddingTop: 16,
        }}>
        <Text>Don't have an account?</Text>
        <Text
          onPress={() => navigation.navigate('Register')}
          style={{color: colors.primary}}>
          Register
        </Text>
      </View>
    </Screen>
  );
};

export default LoginScreen;
