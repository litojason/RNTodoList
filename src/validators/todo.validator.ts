import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

export type TodoFormData = {
  title: string;
  description: string;
  isCompleted: boolean;
};
const todoSchema = yup.object().shape({
  title: yup.string().required('Title is required.').label('Title'),
  description: yup
    .string()
    .required('Description is required.')
    .label('Description'),
  isCompleted: yup
    .boolean()
    .required('Is Completed is required.')
    .label('Completed'),
});
export const todoResolver = yupResolver(todoSchema);
