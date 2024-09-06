import React, {useEffect} from 'react';

import {EditProfileNavProp} from '../../types/navigation.types';
import {EditProfileForm, Screen, ScreenTitle} from '../../components';
import {useAppContext} from '../../store/AppProvider';

const EditProfileScreen = ({navigation}: EditProfileNavProp) => {
  const {handleGetProfile, profileLoading} = useAppContext();

  useEffect(() => {
    handleGetProfile();
  }, []);

  return (
    <Screen isSafeArea style={{padding: 16, gap: 16}}>
      <ScreenTitle
        title="Edit Profile"
        description="Update your profile"
        navigation={navigation}
      />

      {!profileLoading && <EditProfileForm navigation={navigation} />}
    </Screen>
  );
};

export default EditProfileScreen;
