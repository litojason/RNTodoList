import React from 'react';
import {View, Pressable, PressableProps} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Icon} from '../icon';
import {Text} from '../text';

interface ButtonProps extends PressableProps {
  selected?: boolean;
  text?: string;
}

const Checkbox = ({selected, text, ...props}: ButtonProps) => {
  const {colors} = useTheme();

  return (
    <Pressable
      {...props}
      style={({pressed}) => [
        {
          opacity: props.onPress ? (pressed ? 0.8 : 1) : 1,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
        },
      ]}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 24,
          height: 24,
          backgroundColor: selected ? colors.primary : 'transparent',
          borderRadius: 4,
          borderWidth: 2,
          borderColor: colors.primary,
        }}>
        {selected && <Icon name="check" size={16} color={colors.background} />}
      </View>

      {text && <Text>{text}</Text>}
    </Pressable>
  );
};

export default Checkbox;
