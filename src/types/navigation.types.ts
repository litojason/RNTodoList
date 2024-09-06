import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CompositeScreenProps} from '@react-navigation/native';

export type InitialStackParamList = {
  Login: undefined;
  Register: undefined;
};
export type LoginNavProp = NativeStackScreenProps<
  InitialStackParamList,
  'Login'
>;
export type RegisterNavProp = NativeStackScreenProps<
  InitialStackParamList,
  'Register'
>;

export type EditTodoParams = {
  action: 'Add' | 'Edit';
  id?: number;
};
export type MainStackParamList = {
  ProfileDrawer: undefined;
  EditTodo: EditTodoParams;

  EditProfile: undefined;
  ChangePassword: undefined;
  ChangeTheme: undefined;
};
export type ProfileDrawerNavProp = NativeStackScreenProps<
  MainStackParamList,
  'ProfileDrawer'
>;
export type EditTodoNavProp = NativeStackScreenProps<
  MainStackParamList,
  'EditTodo'
>;
export type EditProfileNavProp = NativeStackScreenProps<
  MainStackParamList,
  'EditProfile'
>;
export type ChangePasswordNavProp = NativeStackScreenProps<
  MainStackParamList,
  'ChangePassword'
>;
export type ChangeThemeNavProp = NativeStackScreenProps<
  MainStackParamList,
  'ChangeTheme'
>;

export type ProfileDrawerParamList = {
  Home: undefined;
};
export type HomeNavProp = CompositeScreenProps<
  NativeStackScreenProps<MainStackParamList>,
  DrawerScreenProps<ProfileDrawerParamList, 'Home'>
>;
