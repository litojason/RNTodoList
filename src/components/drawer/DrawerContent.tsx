import React, {useState} from 'react';
import {View} from 'react-native';
import {DrawerContentComponentProps} from '@react-navigation/drawer';

import {MainStackParamList} from '../../types/navigation.types';
import {Screen} from '../screen';
import {Divider} from '../divider';
import {IconButton} from '../icon';
import {Text} from '../text';
import DrawerItem from './DrawerItem';
import {Button} from '../button';
import {ModalAlert} from '../modal';
import {useAppContext} from '../../store/AppProvider';

export type DrawerMenu = {
  title: string;
  iconName: string;
  navigateTo: keyof MainStackParamList;
};

const MENUS: DrawerMenu[] = [
  {
    title: 'Edit Profile',
    iconName: 'account-edit-outline',
    navigateTo: 'EditProfile',
  },
  {
    title: 'Change Password',
    iconName: 'lock-outline',
    navigateTo: 'ChangePassword',
  },
  {
    title: 'Change Theme',
    iconName: 'brightness-6',
    navigateTo: 'ChangeTheme',
  },
];

interface DrawerContentProps extends DrawerContentComponentProps {}

const DrawerContent = ({navigation}: DrawerContentProps) => {
  const {profile, handleLogout} = useAppContext();

  const [logoutVisible, setLogoutVisible] = useState(false);

  return (
    <Screen isSafeArea style={{flex: 1, padding: 16, gap: 16}}>
      <ModalAlert
        visible={logoutVisible}
        setVisible={setLogoutVisible}
        title="Log Out?"
        description="Are you sure you want to log out?"
        buttons={[
          {
            text: 'Cancel',
            onPress: () => setLogoutVisible(false),
          },
          {
            text: 'Log Out',
            mode: 'text',
            type: 'destructive',
            leftIconName: 'logout',
            onPress: () => {
              handleLogout();
              setLogoutVisible(false);
            },
          },
        ]}
      />

      <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
        <IconButton mode="outlined" name="account-outline" />

        <View>
          <Text style={{fontWeight: '600'}}>{profile?.name || '-'}</Text>
          <Text variant="label">{profile?.email || '-'}</Text>
        </View>
      </View>

      <Divider />

      <View style={{flex: 1, gap: 16}}>
        {MENUS.map(menu => (
          <DrawerItem
            key={menu.navigateTo}
            data={menu}
            navigation={navigation}
          />
        ))}
      </View>

      <View style={{flexDirection: 'row'}}>
        <Button
          mode="text"
          type="destructive"
          text="Log out"
          leftIconName="logout"
          buttonStyle={{paddingHorizontal: 0}}
          onPress={() => setLogoutVisible(true)}
        />
      </View>
    </Screen>
  );
};

export default DrawerContent;
