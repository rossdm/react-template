import axios, { AxiosResponse } from 'axios';

import { getTodo } from 'service/TodoService';
import * as json from 'test/data/todo.json';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

it('gets todo', async () => {
  mockedAxios.get.mockResolvedValueOnce({
    data: json
  } as AxiosResponse<object>);

  const todo = await getTodo(1);

  /* eslint-disable @typescript-eslint/camelcase */
  expect(todo).toMatchObject({
    completed: false,
    id: 1,
    title: 'delectus aut autem',
    userId: 1
  });
});
