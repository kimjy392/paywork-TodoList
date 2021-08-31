import React from 'react';
import styled from 'styled-components';
import TodoItem from './item/TodoItem';
const TodoList: React.FC = () => {
  return (
    <TodoListWrapper>
      <TodoItem />
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  margin: 0 20px;
`;

export default TodoList;
