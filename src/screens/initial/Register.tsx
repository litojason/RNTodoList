import React from 'react';
import {ScrollView, View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {RegisterNavProp} from '../../types/navigation.types';
import {Logo, RegisterForm, Screen, ScreenTitle, Text} from '../../components';

const RegisterScreen = ({navigation}: RegisterNavProp) => {
  const {colors} = useTheme();

  return (
    <Screen isSafeArea>
      <ScrollView contentContainerStyle={{padding: 16}}>
        <Logo mode="horizontal" />

        <View style={{gap: 16}}>
          <ScreenTitle title="Register" description="Create new account" />
          <RegisterForm navigation={navigation} />
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          paddingTop: 16,
        }}>
        <Text>Already have an account?</Text>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{color: colors.primary}}>
          Login
        </Text>
      </View>
    </Screen>
  );
};

export default RegisterScreen;
