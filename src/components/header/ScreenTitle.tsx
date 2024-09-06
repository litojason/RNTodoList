import React from 'react';
import {View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Text} from '../text';
import {IconButton} from '../icon';

export type ScreenTitleProps = {
  title: string;
  description: string;
  navigation?: NavigationProp<any, any>;
};

const ScreenTitle = ({title, description, navigation}: ScreenTitleProps) => {
  return (
    <View style={{gap: 16}}>
      {navigation && (
        <IconButton
          mode="text"
          name="chevron-left"
          onPress={navigation?.goBack}
        />
      )}

      <View>
        <Text variant="h1">{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default ScreenTitle;
