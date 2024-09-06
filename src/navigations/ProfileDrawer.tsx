import {createDrawerNavigator} from '@react-navigation/drawer';
import {useTheme} from '@react-navigation/native';

import {ProfileDrawerParamList} from '../types/navigation.types';
import HomeScreen from '../screens/main/Home';
import {DrawerContent} from '../components';

const Drawer = createDrawerNavigator<ProfileDrawerParamList>();

const ProfileDrawer = () => {
  const {colors} = useTheme();

  return (
    <Drawer.Navigator
      screenOptions={({navigation}) => ({
        drawerType: 'front',
        drawerStyle: {
          width: '80%',
        },
        overlayColor: colors.modalOverlay,
        drawerPosition: 'right',
        headerShown: false,
      })}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default ProfileDrawer;
