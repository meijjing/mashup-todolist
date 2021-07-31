import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { lighten, darken } from 'polished';
import { useTodoDispatch, useTodoNextId } from './TodoContext';

const CircleButton = styled.div`
  background: #4419e0;
  &:hover {
    background: ${lighten(.1, '#4419e0')};
  }
  &:active {
    background: ${darken(.1, '#4419e0')};
  }

  z-index: 5;
  cursor: pointer;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;

  transition: .125s all ease-in;

  ${props => props.open && css`
    background: #fa5252;
    &:hover {
    background: ${lighten(.1, '#fa5252')};
    }
    &:active {
      background: ${darken(.1, '#fa5252')};
    }
    transform: translate(-50%, 50%) rotate(45deg);
  `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 30px 32px 60px 32px;
  border-radius: 0 0 16px 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };



  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" onChange={onChange} value={value}/>
          </InsertForm>
        </InsertFormPositioner>
      )}

      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
      
    </>
  );
}

export default React.memo(TodoCreate);