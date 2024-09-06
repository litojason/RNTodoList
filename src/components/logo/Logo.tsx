import React from 'react';
import {Image, View} from 'react-native';

import {assets} from '../../utils';

type LogoProps = {
  size?: number;
  mode?: 'none' | 'horizontal';
};

const Logo = ({size = 72, mode = 'none'}: LogoProps) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        height: size,
        marginVertical: 16,
        aspectRatio: mode === 'horizontal' ? 1044 / 288 : 1,
      }}>
      <Image
        source={
          mode === 'horizontal' ? assets.logo.logoHorizontal : assets.logo.logo
        }
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
      />
    </View>
  );
};

export default Logo;
