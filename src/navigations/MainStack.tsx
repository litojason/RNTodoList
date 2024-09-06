import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MainStackParamList} from '../types/navigation.types';
import ProfileDrawer from './ProfileDrawer';
import EditTodoScreen from '../screens/main/EditTodo';

import EditProfileScreen from '../screens/profile/EditProfile';
import ChangePasswordScreen from '../screens/profile/ChangePassword';
import ChangeThemeScreen from '../screens/profile/ChangeTheme';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProfileDrawer">
      <Stack.Screen name="ProfileDrawer" component={ProfileDrawer} />
      <Stack.Screen name="EditTodo" component={EditTodoScreen} />

      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
