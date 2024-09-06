import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {ChangePasswordNavProp} from '../../types/navigation.types';
import {Input} from '../input';
import {Button} from '../button';
import {ModalAlert} from '../modal';
import {
  ChangePasswordFormData,
  changePasswordResolver,
} from '../../validators/user.validator';
import {changePassword} from '../../services/apis/user.api';

type ChangePasswordFormProps = {
  navigation: ChangePasswordNavProp['navigation'];
};

const ChangePasswordForm = ({navigation}: ChangePasswordFormProps) => {
  const {control, handleSubmit} = useForm<ChangePasswordFormData>({
    mode: 'onChange',
    resolver: changePasswordResolver,
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [changePasswordSuccessVisible, setChangePasswordSuccessVisible] =
    useState(false);

  const onSubmit = (data: ChangePasswordFormData) => {
    setIsLoading(true);

    changePassword(data)
      .then(responseData => setChangePasswordSuccessVisible(true))
      .catch(e => Alert.alert('Change Password Failed', e.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <ModalAlert
        visible={changePasswordSuccessVisible}
        setVisible={setChangePasswordSuccessVisible}
        cancelable
        title="Change Password Successful"
        description="Your password has been updated."
        buttons={[
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]}
      />

      <View style={{flex: 1, justifyContent: 'space-between', gap: 16}}>
        <View style={{gap: 16}}>
          <Input
            control={control}
            name="currentPassword"
            label="Current Password"
            leftIconName="lock-outline"
            placeholder="eg. pass1234"
            secureTextEntry
          />

          <Input
            control={control}
            name="newPassword"
            label="New Password"
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
        </View>

        <Button
          isLoading={isLoading}
          text="Change Password"
          leftIconName="pencil-outline"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default ChangePasswordForm;
