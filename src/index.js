import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import ShopStore from './Redux toolkits/ShopStore'
// import { createStore } from 'redux';
// import { CartReducers } from './ShoppingMAll/CartReducer';
// import { BrowserRouter as Router } from 'react-router-dom';
//  import { devToolsEnhancer } from '@redux-devtools/extension';
//  const store = createStore(CartReducers, devToolsEnhancer())

ReactDOM.render(
  <React.StrictMode>
     <Provider store ={ShopStore}> 
      {/* <Router> */}
      <App />
      {/* </Router> */}
   </Provider> 
      
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

