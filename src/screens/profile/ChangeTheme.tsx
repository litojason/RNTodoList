import React from 'react';
import {View} from 'react-native';

import {ChangeThemeNavProp} from '../../types/navigation.types';
import {RadioButton, Screen, ScreenTitle} from '../../components';
import {useAppContext} from '../../store/AppProvider';

const ChangeThemeScreen = ({navigation}: ChangeThemeNavProp) => {
  const {theme, setTheme} = useAppContext();

  return (
    <Screen isSafeArea style={{padding: 16, gap: 16}}>
      <ScreenTitle
        title="Change Theme"
        description="App theme settings"
        navigation={navigation}
      />

      <View style={{gap: 16}}>
        <RadioButton
          text="System Preference"
          selected={theme === 'system'}
          onPress={() => setTheme('system')}
        />
        <RadioButton
          text="Light Theme"
          selected={theme === 'light'}
          onPress={() => setTheme('light')}
        />
        <RadioButton
          text="Dark Theme"
          selected={theme === 'dark'}
          onPress={() => setTheme('dark')}
        />
      </View>
    </Screen>
  );
};

export default ChangeThemeScreen;
