import './index.css';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import StoreContext from './StoreContext';
// import state from './redux/state';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

// addPost('React study');

  root.render(
  
    <React.StrictMode>
      <BrowserRouter>
      <Provider store ={store}>
      <App 
      // state={state} dispatch={store.dispatch.bind(store)} store={store}
      />
      </Provider>
      </BrowserRouter>
   
    </React.StrictMode>
  );







