import React from 'react';
import styled from 'styled-components';
import TodoInput from './input/TodoInput';
const TodoHeader: React.FC = () => {
  return (
    <>
      <Title>TODOS</Title>
      <TodoInput />
    </>
  );
};

export default TodoHeader;

const Title = styled.h1`
  font-size: 90px;
  text-align: center;
  margin-bottom: 40px;
`;
