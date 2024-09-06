import React, {useEffect} from 'react';
import {Alert} from 'react-native';

import {EditTodoNavProp} from '../../types/navigation.types';
import {Screen, ScreenTitle, TodoForm} from '../../components';
import {getTodoById} from '../../services/apis/todo.api';
import {useAppContext} from '../../store/AppProvider';

const EditTodoScreen = ({route, navigation}: EditTodoNavProp) => {
  const {setTodo, todoLoading, setTodoLoading} = useAppContext();

  const {action, id} = route.params;
  const title = `${action} Todo`;
  const description =
    action === 'Add' ? 'Plan ahead of time' : 'Change or update Todo';

  useEffect(() => {
    if (action === 'Edit') getTodo();
  }, []);

  const getTodo = () => {
    setTodoLoading(true);

    getTodoById(id!)
      .then(data => setTodo(data.todo))
      .catch(e =>
        Alert.alert('Get Todo Failed', e.message, [
          {
            text: 'Go back',
            onPress: () => navigation.goBack(),
          },
        ]),
      )
      .finally(() => setTodoLoading(false));
  };

  return (
    <Screen isSafeArea style={{padding: 16, gap: 16}}>
      <ScreenTitle
        title={title}
        description={description}
        navigation={navigation}
      />

      {!todoLoading && <TodoForm action={action} navigation={navigation} />}
    </Screen>
  );
};

export default EditTodoScreen;
