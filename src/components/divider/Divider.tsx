import React from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

const Divider = () => {
  const {colors} = useTheme();

  return (
    <View
      style={{width: '100%', height: 2, backgroundColor: colors.lightGrey}}
    />
  );
};

export default Divider;
