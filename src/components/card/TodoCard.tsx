import React, {useCallback} from 'react';
import {View} from 'react-native';
import {useTheme} from '@react-navigation/native';

import {Todo} from '../../types/todo.types';
import {Checkbox} from '../input';
import {Text} from '../text';
import {IconButton} from '../icon';
import {useAppContext} from '../../store/AppProvider';
import {HomeNavProp} from '../../types/navigation.types';
import {completeTodo} from '../../services/apis/todo.api';
import {debounce} from '../../utils';

type TodoCardProps = {
  data: Todo;
  navigation: HomeNavProp['navigation'];
  onDeletePressed: () => void;
};

const TodoCard = ({data, navigation, onDeletePressed}: TodoCardProps) => {
  const {colors} = useTheme();
  const {setCompleteTodo} = useAppContext();

  const {id, title, description, isCompleted} = data;

  const debounceCompleteTodo = useCallback(debounce(completeTodo, 1000), []);

  const handleCompleteTodo = () => {
    setCompleteTodo(id);
    debounceCompleteTodo(id, data);
  };

  const handleNavigate = () => {
    navigation.navigate('EditTodo', {action: 'Edit', id});
  };

  const handleDeletePressed = () => {
    onDeletePressed();
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 16,
        backgroundColor: colors.surface,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: colors.lightGrey,
      }}>
      <Checkbox selected={isCompleted} onPress={handleCompleteTodo} />

      <View style={{flex: 1}}>
        <Text
          numberOfLines={1}
          style={{textDecorationLine: isCompleted ? 'line-through' : 'none'}}>
          {title}
        </Text>
        <Text
          variant="label"
          numberOfLines={1}
          style={{
            color: colors.grey,
            textDecorationLine: isCompleted ? 'line-through' : 'none',
          }}>
          {description}
        </Text>
      </View>

      <IconButton name="square-edit-outline" onPress={handleNavigate} />
      <IconButton
        name="delete-outline"
        buttonStyle={{backgroundColor: colors.red, borderColor: colors.red}}
        onPress={handleDeletePressed}
      />
    </View>
  );
};

export default TodoCard;
