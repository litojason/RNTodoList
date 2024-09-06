import React, {useEffect, useState} from 'react';
import {Alert, FlatList, RefreshControl, View} from 'react-native';

import {Todo} from '../../types/todo.types';
import {HomeNavProp} from '../../types/navigation.types';
import {TodoCard} from '../card';
import {ModalAlert} from '../modal';
import {Text} from '../text';
import {Logo} from '../logo';
import {useAppContext} from '../../store/AppProvider';
import {deleteTodo} from '../../services/apis/todo.api';

type TodoListProps = {
  navigation: HomeNavProp['navigation'];
};

const TodoList = ({navigation}: TodoListProps) => {
  const {todos, refreshTodos, todosLoading} = useAppContext();

  const [selectedTodoId, setSelectedTodoId] = useState(-1);
  const [deleteTodoVisible, setDeleteTodoVisible] = useState(false);

  useEffect(() => {
    refreshTodos();
  }, []);

  const handleDeleteTodo = () => {
    deleteTodo(selectedTodoId)
      .then(() => {
        refreshTodos();
        setDeleteTodoVisible(false);
      })
      .catch(e => Alert.alert('Delete Todo Failed', e.message));
  };

  const _renderTodo = ({item}: {item: Todo}) => {
    return (
      <TodoCard
        data={item}
        navigation={navigation}
        onDeletePressed={() => {
          setSelectedTodoId(item.id);
          setDeleteTodoVisible(true);
        }}
      />
    );
  };

  return (
    <>
      <ModalAlert
        visible={deleteTodoVisible}
        setVisible={setDeleteTodoVisible}
        title="Delete Todo?"
        description="Are you sure you want to delete todo? This action cannot be undone."
        buttons={[
          {text: 'Cancel', onPress: () => setDeleteTodoVisible(false)},
          {
            text: 'Delete',
            mode: 'text',
            type: 'destructive',
            leftIconName: 'delete-outline',
            onPress: handleDeleteTodo,
          },
        ]}
      />

      <FlatList
        data={todos}
        extraData={todos}
        keyExtractor={i => i.id.toString()}
        renderItem={_renderTodo}
        ItemSeparatorComponent={() => <View style={{height: 16}} />}
        refreshControl={
          <RefreshControl refreshing={todosLoading} onRefresh={refreshTodos} />
        }
        ListEmptyComponent={
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              paddingTop: 120,
            }}>
            <Logo />
            <Text style={{textAlign: 'center'}}>No todo yet.</Text>
          </View>
        }
      />
    </>
  );
};

export default TodoList;
