import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './TodoContext';

const TodoHeadBlock = styled.div`
  padding: 40px 32px 24px 32px;
  border-bottom: 1px solid #eee;
  h1 {
    margin: 0;
    font-size: 2rem;
    color: #000;
  }
  .day {
    margin-top: 4px;
    color: #8c8c8c;
    font-size: 1.25rem;
  }
  .task-left {
    color: #4419e0;
    font-size: 1.25rem;
    margin-top: 30px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);
  
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', {
    weekday: 'long'
  });

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="task-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;