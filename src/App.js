import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import { TodoProvider } from './components/TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #eee;
    height: 100vh;
    h1 {
      text-align: center;
    }
  }
`;


function App() {
  return (
    <TodoProvider>
      <h1>Todo List</h1>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
