export type Todo = {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  //   userId: number;
};

export const TODOS: Todo[] = [
  {
    id: 1,
    title: 'This Title',
    description: 'This is description.',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'This Title 2',
    description: 'This is description 2.',
    isCompleted: true,
  },
  {
    id: 3,
    title: 'This Long Title; This Long Title',
    description: 'This is long description; This is long description.',
    isCompleted: true,
  },
];
