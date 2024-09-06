import React, {useState} from 'react';
import {Alert, View} from 'react-native';
import {Controller, useForm} from 'react-hook-form';

import {EditTodoNavProp, EditTodoParams} from '../../types/navigation.types';
import {TodoFormData, todoResolver} from '../../validators/todo.validator';
import {Checkbox, Input} from '../input';
import {Button} from '../button';
import {useAppContext} from '../../store/AppProvider';
import {addTodo, updateTodo} from '../../services/apis/todo.api';

type TodoFormProps = {
  action: EditTodoParams['action'];
  navigation: EditTodoNavProp['navigation'];
};

const TodoForm = ({action, navigation}: TodoFormProps) => {
  const {todo, refreshTodos} = useAppContext();

  const {control, handleSubmit, formState} = useForm<TodoFormData>({
    mode: 'onChange',
    resolver: todoResolver,
    defaultValues: {
      title: todo?.title,
      description: todo?.description,
      isCompleted: todo?.isCompleted || false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleAddTodo = (data: TodoFormData) => {
    addTodo(data)
      .then(responseData => {
        refreshTodos();
        navigation.goBack();
      })
      .catch(e => Alert.alert('Add Todo Failed', e.message))
      .finally(() => setIsLoading(false));
  };

  const handleEditTodo = (data: TodoFormData) => {
    updateTodo(todo?.id!, data)
      .then(responseData => {
        refreshTodos();
        navigation.goBack();
      })
      .catch(e => Alert.alert('Edit Todo Failed', e.message))
      .finally(() => setIsLoading(false));
  };

  const onSubmit = (data: TodoFormData) => {
    setIsLoading(true);

    if (action === 'Add') {
      handleAddTodo(data);
    }

    if (action === 'Edit') {
      handleEditTodo(data);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'space-between', gap: 16}}>
      <View style={{gap: 16}}>
        <Input
          control={control}
          name="title"
          label="Title"
          leftIconName="format-text"
          placeholder="eg. Cook healthy food"
        />

        <Input
          control={control}
          name="description"
          label="Description"
          leftIconName="card-text-outline"
          placeholder="eg. Buy groceries, cook food."
          multiline
        />

        <View style={{alignSelf: 'flex-end'}}>
          <Controller
            control={control}
            name="isCompleted"
            render={({field: {onChange, value}}) => (
              <Checkbox
                selected={value}
                text="Completed"
                onPress={() => onChange(!value)}
              />
            )}
          />
        </View>
      </View>

      <Button
        isLoading={isLoading}
        text={`${action} Todo`}
        leftIconName={action === 'Add' ? 'plus' : 'square-edit-outline'}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

export default TodoForm;
