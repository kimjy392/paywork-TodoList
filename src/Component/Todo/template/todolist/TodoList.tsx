import React from 'react';
import { TodoList as TTodoList } from 'Store/types';
import styled from 'styled-components';
import TodoItem from './item/TodoItem';

interface ITodoListProps {
  todoList: TTodoList | null;
}

const TodoList: React.FC<ITodoListProps> = ({ todoList }) => {
  return (
    <TodoListWrapper>
      {todoList?.map((todo) => (
        <TodoItem key={todo.id} todoItem={todo} />
      ))}
    </TodoListWrapper>
  );
};

const TodoListWrapper = styled.div`
  & > * {
    margin-bottom: 20px;
  }
`;

export default TodoList;
