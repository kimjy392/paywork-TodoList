import React from 'react';
import styled from 'styled-components';
import TodoHeader from './template/header/TodoHeader';
import TodoList from './template/todolist/TodoList';
const Todo: React.FC = () => {
  return (
    <TodoWrapper>
      <TodoHeader />
      <TodoList />
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  margin-top: 96px;
`;

export default Todo;
