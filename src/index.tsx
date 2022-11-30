import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

import { store } from './redux/store'


const rootEL =  document.getElementById('root');

if (rootEL) {
  const root = ReactDOM.createRoot(rootEL) 
  root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)}
