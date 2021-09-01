import React from 'react';
import styled from 'styled-components';
import Button from 'Component/Common/Button';
import { ReactComponent as PlusIcon } from 'Assets/icon/ic_plus.svg';
import useInput from 'Hooks/useInput';
const TodoInput: React.FC = () => {
  const { content, handleChange, handleSubmit } = useInput();
  return (
    <TodoInputWrapper>
      <StyledInput value={content} onChange={handleChange} />
      <AddButton onClick={handleSubmit}>
        <StyledPlusIcon />
      </AddButton>
    </TodoInputWrapper>
  );
};

export default TodoInput;

const TodoInputWrapper = styled.div`
  display: flex;
  justify-content: center;
  & > * {
    flex-grow: 1;
  }
  margin-bottom: 20px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 20px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 10px;
  margin-right: 10px;
  border-radius: 8px;
  transition-duration: 0.4s;
`;

const AddButton = styled(Button)`
  border-radius: 8px;
  padding: 10px;
`;

const StyledPlusIcon = styled(PlusIcon)`
  transform: translateY(15%);
`;
