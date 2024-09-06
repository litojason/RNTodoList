import React from 'react';
import {TextInput, TextInputProps, View} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {Control, Controller} from 'react-hook-form';

import {Text} from '../text';
import {Icon} from '../icon';

interface InputProps extends TextInputProps {
  control: Control<any, any>;
  name: string;
  label: string;
  leftIconName: string;
  hint?: string;
}

const Input = (props: InputProps) => {
  const {colors} = useTheme();

  const {control, name, label, leftIconName, hint} = props;

  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <View>
          <Text
            variant="label"
            style={{color: error ? colors.red : colors.text}}>
            {label}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: props.multiline ? 'flex-start' : 'center',
              minHeight: props.multiline ? 120 : 56,
              maxHeight: props.multiline ? 240 : 0,
              paddingVertical: props.multiline ? 15 : 0,
              paddingHorizontal: 16,
              gap: 8,
              backgroundColor: colors.surface,
              borderRadius: 4,
              borderWidth: 1,
              borderColor: error
                ? colors.red
                : value
                ? colors.primary
                : colors.lightGrey,
            }}>
            {leftIconName && (
              <Icon
                name={leftIconName}
                color={error ? colors.red : colors.primary}
              />
            )}
            <TextInput
              placeholderTextColor={colors.grey}
              onChangeText={onChange}
              onBlur={onBlur}
              defaultValue={value}
              {...props}
              style={[
                {
                  flex: 1,
                  minHeight: props.multiline ? 120 - 16 * 2 : undefined,
                  width: '100%',
                  margin: 0,
                  padding: 0,
                  paddingTop: props.multiline ? 3 : 0,
                  color: error ? colors.red : colors.text,
                },
                props.style,
              ]}
            />
          </View>
          {hint && (
            <Text variant="label" style={{color: colors.grey}}>
              {hint}
            </Text>
          )}
          {error && (
            <Text variant="label" style={{color: colors.red}}>
              {error.message}
            </Text>
          )}
        </View>
      )}
    />
  );
};

export default Input;
