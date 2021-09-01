import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CheckIcon } from 'Assets/icon/ic_check.svg';
import { ReactComponent as DeleteIcon } from 'Assets/icon/ic_delete.svg';
import Button from 'Component/Common/Button';
import { ITodo } from 'Store/types';
import { useDispatch } from 'react-redux';
import { deleteTodoFetch, postIsCheckFetch } from 'Store/todo';

interface ITodoItemProps {
  todoItem: ITodo;
}

const TodoItem: React.FC<ITodoItemProps> = ({ todoItem }) => {
  const { id, content, isCheck } = todoItem;
  const dispatch = useDispatch();
  return (
    <TodoItemWrapper>
      <SelectButtonWrapper>
        <StyledSelectButton onClick={() => dispatch(postIsCheckFetch(id))}>
          {isCheck && <StyledCheckIcon />}
        </StyledSelectButton>
      </SelectButtonWrapper>
      <TodoItemContent>
        <span>{content}</span>
      </TodoItemContent>
      <StyledDeleteButton onClick={() => dispatch(deleteTodoFetch(id))}>
        <StyledDeleteIcon />
      </StyledDeleteButton>
    </TodoItemWrapper>
  );
};

export default TodoItem;

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TodoItemContent = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
`;

// interface ISelectButton {
//   isClicked: boolean;
// }

const SelectButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSelectButton = styled.button`
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.black};
  width: 30px;
  height: 30px;
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 15px;
  height: 15px;
  fill: #14213d;
`;

const StyledDeleteButton = styled(Button)`
  padding: 10px;
  border-radius: 8px;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  fill: ${({ theme }) => theme.colors.white};
`;
