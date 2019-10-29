import React, { FC } from 'react';

import Todo from 'types/Todo';

import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  line-height: 1.5em;
  margin: 0;
  padding: 0;
`;

const Field = styled.div`
  display: block;
  text-align: left;
`;

const Completed = styled(Field)`
  width: 400px;
`;

const ID = styled(Field)`
  width: 100px;
`;

const Title = styled(Field)`
  width: 600px;
`;

interface Props {
  todos: Todo[];
}

const TodoList: FC<Props> = ({ todos }) => {
  return (
    <List>
      {todos.map(function(todo, index) {
        const { completed, id, title } = todo;

        return (
          <li key={index}>
            <Completed>completed: {completed.toString()}</Completed>
            <ID>id: {id}</ID>
            <Title>title: {title}</Title>
          </li>
        );
      })}
    </List>
  );
};

export default TodoList;
