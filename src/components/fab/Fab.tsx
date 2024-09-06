import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {IconButton} from '../icon';

type FABProps = {
  iconName: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
const FAB = ({iconName, onPress, style}: FABProps) => {
  const {colors} = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      testID="fab-container"
      style={[
        {
          position: 'absolute',
          right: 16,
          bottom: insets.bottom + 16,
        },
        style,
      ]}>
      <IconButton
        name={iconName}
        onPress={onPress}
        iconColor={colors.white}
        buttonStyle={{
          height: 56,
          width: 56,
          backgroundColor: colors.primary,
        }}
      />
    </View>
  );
};

export default FAB;
