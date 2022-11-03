import React from 'react'
import './App.css';
import TodoBody from './components/TodoBody.js/TodoBody';

function App(props) {
  return (
    <div className="App">
      <div className='appBody'>
        <h1>TO-DO</h1>

        <TodoBody
          addTodo={props.addTodo}
          dellTodo={props.dellTodo}
          doneTodo={props.doneTodo}
          state={props.state}
        />
      </div>
    </div>
  );
}

export default App;
