import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {Input} from '../input';
import {Button} from '../button';
import {LoginFormData, loginResolver} from '../../validators/user.validator';
import {storeToken} from '../../lib/asyncStorage';
import {useAppContext} from '../../store/AppProvider';
import {login} from '../../services/apis/user.api';

const LoginForm = () => {
  const {setToken} = useAppContext();

  const {control, handleSubmit, setError} = useForm<LoginFormData>({
    mode: 'onChange',
    resolver: loginResolver,
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data: LoginFormData) => {
    setIsLoading(true);

    login(data)
      .then(responseData => {
        storeToken(responseData.user.token);
        setToken(responseData.user.token);
      })
      .catch(e => {
        Alert.alert('Login Failed', e.message);
        setError('email', {
          message: e.message,
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <View style={{gap: 16}}>
      <Input
        control={control}
        name="email"
        label="Email"
        leftIconName="email-outline"
        placeholder="eg. test@gmail.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Input
        control={control}
        name="password"
        label="Password"
        leftIconName="lock-outline"
        placeholder="eg. pass1234"
        secureTextEntry
      />

      <Button
        isLoading={isLoading}
        text="Login"
        onPress={handleSubmit(onSubmit)}
        buttonStyle={{marginTop: 16}}
      />
    </View>
  );
};

export default LoginForm;
