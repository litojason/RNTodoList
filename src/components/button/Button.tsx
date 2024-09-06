import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Text} from '../text';
import {Icon} from '../icon';

interface ButtonProps extends PressableProps {
  mode?: 'contained' | 'outlined' | 'text';
  type?: 'none' | 'destructive';
  text?: string;
  leftIconName?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

const Button = ({
  mode = 'contained',
  type = 'none',
  text = 'Button',
  leftIconName,
  buttonStyle,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const {colors} = useTheme();

  const bgColor =
    mode === 'contained' && type === 'destructive'
      ? colors.red
      : mode === 'contained'
      ? colors.primary
      : undefined;
  const borderColor =
    mode === 'contained' || mode === 'outlined'
      ? type === 'destructive'
        ? colors.red
        : colors.primary
      : 'transparent';
  const textColor =
    mode === 'outlined' || mode === 'text'
      ? type === 'destructive'
        ? colors.red
        : colors.primary
      : colors.white;

  return (
    <Pressable
      disabled={isLoading}
      {...props}
      style={({pressed}) => [
        {
          opacity: props.disabled
            ? 0.6
            : isLoading
            ? 0.8
            : props.onPress
            ? pressed
              ? 0.8
              : 1
            : 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          height: 40,
          paddingHorizontal: 16,
          gap: 8,
          backgroundColor: bgColor,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: borderColor,
        },
        buttonStyle,
      ]}>
      {isLoading ? (
        <ActivityIndicator size={24} color={textColor} />
      ) : (
        <>
          {leftIconName && <Icon name={leftIconName} color={textColor} />}
          <Text style={{color: textColor, fontWeight: '600'}}>{text}</Text>
        </>
      )}
    </Pressable>
  );
};

export default Button;
