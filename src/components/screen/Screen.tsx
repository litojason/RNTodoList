import React from 'react';
import {View, ViewProps} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface ScreenProps extends ViewProps {
  isSafeArea?: boolean;
}

function Screen(props: ScreenProps) {
  const {colors} = useTheme();

  if (props.isSafeArea) {
    return (
      <SafeAreaView
        {...props}
        style={[
          {
            flex: 1,
            height: '100%',
            backgroundColor: colors.background,
          },
          props.style,
        ]}>
        {props.children}
      </SafeAreaView>
    );
  }

  return (
    <View
      {...props}
      style={[
        {
          flex: 1,
          height: '100%',
          backgroundColor: colors.background,
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
}

export default Screen;
