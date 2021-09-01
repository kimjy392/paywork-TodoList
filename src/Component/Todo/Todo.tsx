import React from 'react';
import styled from 'styled-components';
import TodoHeader from './template/header/TodoHeader';
import TodoList from './template/todolist/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'Store';
import { useEffect } from 'react';
import { getTodosFetch } from 'Store/todo';
const Todo: React.FC = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state: RootState) => state.todoReducer.data);
  useEffect(() => {
    dispatch(getTodosFetch());
  }, []);

  return (
    <TodoWrapper>
      <TodoHeader />
      <TodoList todoList={todoList} />
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  margin-top: 96px;
`;

export default Todo;
