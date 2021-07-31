import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './TodoContext';


const CheckCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  cursor: pointer;
  ${props => props.done && css`
    border: 1px solid #4419e0;
    color: #4419e0;
  `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 1.125rem;
  color: #272727;
  ${props => props.done && css`
    color: #c2c2c2;
  `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #fa5252;
  }
  opacity: 0;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();

  const onToggle = () => dispatch({
    type: 'TOGGLE',
    id
  });
  const onRemove = () => dispatch({
    type: 'REMOVE',
    id
  });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);