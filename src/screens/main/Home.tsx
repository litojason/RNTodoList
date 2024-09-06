import React, {useEffect} from 'react';

import {HomeNavProp} from '../../types/navigation.types';
import {Fab, HomeHeader, Screen, TodoList} from '../../components';
import {useAppContext} from '../../store/AppProvider';

const HomeScreen = ({navigation}: HomeNavProp) => {
  const {handleGetProfile, setTodo} = useAppContext();

  useEffect(() => {
    handleGetProfile();
  }, []);

  const handleFabPressed = () => {
    setTodo(undefined);
    navigation.navigate('EditTodo', {action: 'Add'});
  };

  return (
    <Screen isSafeArea style={{padding: 16}}>
      <HomeHeader navigation={navigation} />

      <TodoList navigation={navigation} />

      <Fab iconName="plus" onPress={handleFabPressed} />
    </Screen>
  );
};

export default HomeScreen;
