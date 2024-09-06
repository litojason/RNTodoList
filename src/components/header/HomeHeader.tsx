import React from 'react';
import {View} from 'react-native';

import {Logo} from '../logo';
import {IconButton} from '../icon';
import {HomeNavProp} from '../../types/navigation.types';

type HomeHeaderProps = {
  navigation: HomeNavProp['navigation'];
};

const HomeHeader = ({navigation}: HomeHeaderProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Logo mode="horizontal" size={40} />
      <IconButton
        mode="outlined"
        name="account-outline"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default HomeHeader;
