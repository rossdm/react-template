import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';

import List from 'components/TodoList';
import { getTodo } from 'service/TodoService';
import Todo from 'types/Todo';

export default function App(): ReactElement {
  const [state, setState] = useState({
    todos: [] as Todo[],
    loaded: false
  });

  useEffect(() => {
    const load = async (): Promise<void> => {
      const todo = await getTodo(1);

      setState({
        todos: [todo],
        loaded: true
      });
    };

    load();
  }, []);

  const { todos } = state;
  return (
    <div className="App">
      <header className="App-header">
        <List todos={todos} />
      </header>
    </div>
  );
}
