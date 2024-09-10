import {Todo} from '../../types/todo.types';
import {TodoFormData} from '../../validators/todo.validator';
import client, {handleClientError} from '../client';

type GetTodosResponse = {
  message: string;
  todos: Todo[];
};
export const getTodos = async () => {
  try {
    const response = await client.get('/todos');

    return response.data as GetTodosResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type GetTodoByIdResponse = {
  message: string;
  todo: Todo;
};
export const getTodoById = async (id: number) => {
  try {
    const response = await client.get(`/todos/${id}`);

    return response.data as GetTodoByIdResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type AddTodoResponse = {
  message: string;
  todo: Todo;
};
export const addTodo = async (data: TodoFormData) => {
  try {
    const response = await client.post('/todos', data);

    return response.data as AddTodoResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type UpdateTodoResponse = {
  message: string;
  todo: Todo;
};
export const updateTodo = async (id: number, data: TodoFormData) => {
  try {
    const response = await client.put(`/todos/${id}`, data);

    return response.data as UpdateTodoResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type CompleteTodoResponse = {
  message: string;
  todo: Todo;
};
export const completeTodo = async (id: number, data: TodoFormData) => {
  try {
    const response = await client.put(`/todos/complete/${id}`, {
      isCompleted: data.isCompleted,
    });

    return response.data as CompleteTodoResponse;
  } catch (error) {
    return handleClientError(error);
  }
};

type DeleteTodoResponse = {
  message: string;
};
export const deleteTodo = async (id: number) => {
  try {
    const response = await client.delete(`/todos/${id}`);

    return response.data as DeleteTodoResponse;
  } catch (error) {
    return handleClientError(error);
  }
};
