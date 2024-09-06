import React from 'react';
import {Pressable} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

import {DrawerMenu} from './DrawerContent';
import {Text} from '../text';
import {Icon} from '../icon';

type DrawerItemProps = {
  data: DrawerMenu;
  navigation: DrawerNavigationHelpers;
};

const DrawerItem = ({data, navigation}: DrawerItemProps) => {
  const {colors} = useTheme();

  const {title, iconName} = data;

  return (
    <Pressable
      onPress={() => navigation.navigate(data.navigateTo)}
      style={({pressed}) => [
        {
          opacity: pressed ? 0.8 : 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 16,
          gap: 8,
          backgroundColor: colors.surface,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: colors.lightGrey,
        },
      ]}>
      <Icon name={iconName} />
      <Text style={{flex: 1}}>{title}</Text>
      <Icon name="chevron-right" />
    </Pressable>
  );
};

export default DrawerItem;
