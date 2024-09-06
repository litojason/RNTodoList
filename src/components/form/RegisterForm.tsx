import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {RegisterNavProp} from '../../types/navigation.types';
import {Input} from '../input';
import {Button} from '../button';
import {
  RegisterFormData,
  registerResolver,
} from '../../validators/user.validator';
import {ModalAlert} from '../modal';
import {register} from '../../services/apis/user.api';

type RegisterFormProps = {
  navigation: RegisterNavProp['navigation'];
};

const RegisterForm = ({navigation}: RegisterFormProps) => {
  const {control, handleSubmit, setError} = useForm<RegisterFormData>({
    mode: 'onChange',
    resolver: registerResolver,
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [registerSuccessVisible, setRegisterSuccessVisible] = useState(false);

  const onSubmit = (data: RegisterFormData) => {
    setIsLoading(true);

    register(data)
      .then(responseData => {
        setRegisterSuccessVisible(true);
      })
      .catch(e => {
        Alert.alert('Register Failed', e.message);
        setError('email', {
          message: e.message,
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <ModalAlert
        visible={registerSuccessVisible}
        setVisible={setRegisterSuccessVisible}
        cancelable
        title="Register Successful"
        description="Your account has been created, please login to start using our app."
        buttons={[
          {
            text: 'Login',
            onPress: () => navigation.navigate('Login'),
          },
        ]}
      />

      <View style={{gap: 16}}>
        <Input
          control={control}
          name="name"
          label="Name"
          leftIconName="account-outline"
          placeholder="eg. John Doe"
          hint="* Minimum 2 characters"
        />

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
          hint="* Password must be minimum 6 characters long."
        />

        <Input
          control={control}
          name="confirmPassword"
          label="Confirm Password"
          leftIconName="lock-outline"
          placeholder="eg. pass1234"
          secureTextEntry
        />

        <Button
          isLoading={isLoading}
          text="Register"
          onPress={handleSubmit(onSubmit)}
          buttonStyle={{marginTop: 16}}
        />
      </View>
    </>
  );
};

export default RegisterForm;
