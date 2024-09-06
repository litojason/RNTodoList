import React, {createContext, useContext, useState} from 'react';

import {removeToken, storeTheme} from '../lib/asyncStorage';
import {User} from '../types/user.types';
import {Todo} from '../types/todo.types';
import {getTodos} from '../services/apis/todo.api';
import {getProfile} from '../services/apis/user.api';

export type ThemeType = 'system' | 'light' | 'dark';

type AppContextType = {
  token: string;
  setToken: (token: string) => void;
  handleLogout: () => void;
  profile?: User;
  setProfile: (user: User) => void;
  handleGetProfile: () => void;
  profileLoading: boolean;
  setProfileLoading: (loading: boolean) => void;

  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;

  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
  refreshTodos: () => void;
  todosLoading: boolean;

  todo?: Todo;
  setTodo: (todo?: Todo) => void;
  todoLoading: boolean;
  setTodoLoading: (loading: boolean) => void;

  setCompleteTodo: (id: number) => void;
  // deleteTodo: (id: number) => void;
};

const AppContext = createContext<AppContextType | null>(null);
export const useAppContext = () => useContext(AppContext) as AppContextType;

interface AppProviderProps extends React.PropsWithChildren {}

const AppProvider = ({children}: AppProviderProps) => {
  const [token, setToken] = useState('');
  const [profile, setProfile] = useState<User>();
  const [profileLoading, setProfileLoading] = useState(false);

  const [theme, setTheme] = useState<ThemeType>('system');

  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosLoading, setTodosLoading] = useState(false);
  const [todo, setTodo] = useState<Todo>();
  const [todoLoading, setTodoLoading] = useState(false);

  const handleGetProfile = () => {
    setProfileLoading(true);

    getProfile()
      .then(data => setProfile(data.user))
      .finally(() => setProfileLoading(false));
  };

  const handleSetTheme = (themeType: ThemeType) => {
    console.log('themeType', themeType);
    setTheme(themeType);
    storeTheme(themeType);
  };

  const refreshTodos = () => {
    setTodosLoading(true);

    getTodos()
      .then(data => setTodos(data.todos))
      .finally(() => setTodosLoading(false));
  };

  const setCompleteTodo = (id: number) => {
    setTodos(prevState => {
      const newTodos = [...prevState];
      const selectedTodoIndex = newTodos.findIndex(todo => todo.id === id);
      if (selectedTodoIndex === -1) {
        return newTodos;
      }

      const selectedTodo = newTodos[selectedTodoIndex];
      selectedTodo.isCompleted = !selectedTodo.isCompleted;
      newTodos.splice(selectedTodoIndex, 1, selectedTodo);

      return newTodos;
    });
  };

  // const deleteTodo = (id: number) => {
  //   setTodos(prevState => {
  //     const newTodos = [...prevState];

  //     const selectedTodoIndex = newTodos.findIndex(todo => todo.id === id);

  //     newTodos.splice(selectedTodoIndex, 1);

  //     console.log('newTodos', newTodos);

  //     return newTodos;
  //   });
  // };

  const handleLogout = () => {
    removeToken();
    setToken('');
  };

  return (
    <AppContext.Provider
      value={{
        token,
        setToken,
        handleLogout,
        profile,
        setProfile,
        handleGetProfile,
        profileLoading,
        setProfileLoading,

        theme,
        setTheme: handleSetTheme,

        todos,
        setTodos,
        refreshTodos,
        todosLoading,

        todo,
        setTodo,
        todoLoading,
        setTodoLoading,
        setCompleteTodo,
        // deleteTodo,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
