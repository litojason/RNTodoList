import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {useForm} from 'react-hook-form';

import {EditProfileNavProp} from '../../types/navigation.types';
import {Input} from '../input';
import {Button} from '../button';
import {ModalAlert} from '../modal';
import {
  EditProfileFormData,
  editProfileResolver,
} from '../../validators/user.validator';
import {useAppContext} from '../../store/AppProvider';
import {updateProfile} from '../../services/apis/user.api';

type EditProfileFormProps = {
  navigation: EditProfileNavProp['navigation'];
};

const EditProfileForm = ({navigation}: EditProfileFormProps) => {
  const {profile, handleGetProfile} = useAppContext();

  const {control, handleSubmit} = useForm<EditProfileFormData>({
    mode: 'onChange',
    resolver: editProfileResolver,
    defaultValues: {
      name: profile?.name,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [updateProfileSuccessVisible, setUpdateProfileSuccessVisible] =
    useState(false);

  const onSubmit = (data: EditProfileFormData) => {
    setIsLoading(true);

    updateProfile(data)
      .then(responseData => {
        setUpdateProfileSuccessVisible(true);
      })
      .catch(e => Alert.alert('Update Profile Failed', e.message))
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <ModalAlert
        visible={updateProfileSuccessVisible}
        setVisible={setUpdateProfileSuccessVisible}
        cancelable
        title="Update Successful"
        description="Your profile has been updated."
        buttons={[
          {
            text: 'OK',
            onPress: () => {
              handleGetProfile();
              navigation.goBack();
            },
          },
        ]}
      />

      <View style={{flex: 1, justifyContent: 'space-between', gap: 16}}>
        <View style={{gap: 16}}>
          <Input
            control={control}
            name="name"
            label="Name"
            leftIconName="account-outline"
            hint="* Minimum 2 characters"
            placeholder="eg. John Doe"
          />
        </View>

        <Button
          isLoading={isLoading}
          text="Update Profile"
          leftIconName="account-edit-outline"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default EditProfileForm;
