import { getJSON } from './AxiosService';
import Todo from 'types/Todo';

export const getTodo = async (id: number): Promise<Todo> => {
  const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

  return getJSON(url);
};
