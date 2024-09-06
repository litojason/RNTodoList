import React from 'react';
import {View} from 'react-native';

import {ChangePasswordNavProp} from '../../types/navigation.types';
import {ChangePasswordForm, Screen, ScreenTitle} from '../../components';

const ChangePasswordScreen = ({navigation}: ChangePasswordNavProp) => {
  return (
    <Screen isSafeArea style={{padding: 16, gap: 16}}>
      <ScreenTitle
        title="Change Password"
        description="Please fill in the fields below"
        navigation={navigation}
      />

      <ChangePasswordForm navigation={navigation} />
    </Screen>
  );
};

export default ChangePasswordScreen;
