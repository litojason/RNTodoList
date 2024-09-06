import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

interface TextProps extends RNTextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'body' | 'label';
  weight?: 'semibold' | 'regular';
}

const Text = ({variant = 'body', weight = 'regular', ...props}: TextProps) => {
  const {colors} = useTheme();

  const {h1, h2, h3, body, label} = styles;
  const textStyle =
    variant === 'h1'
      ? h1
      : variant === 'h2'
      ? h2
      : variant === 'h3'
      ? h3
      : variant === 'body'
      ? body
      : label;

  return (
    <RNText {...props} style={[textStyle, {color: colors.text}, props.style]}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  h2: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  h3: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '600',
    fontFamily: 'Inter',
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    fontFamily: 'Inter',
  },
});

export default Text;
