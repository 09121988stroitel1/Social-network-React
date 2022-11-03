import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './state/state'

const render = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        addTodo={store.addTodo}
        dellTodo={store.dellTodo}
        doneTodo={store.doneTodo}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

render(store.getState())
store.rere(render)

reportWebVitals();
