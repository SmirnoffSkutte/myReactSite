import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/reset.css';
import './styles/app.css';
import './styles/header.css';
import './styles/caruselbuttons.css';
import './styles/goodsButton.css';
import './styles/menuBlock.css';
import './styles/cart.css';
import './styles/goodPage.css';
import './styles/catalogePage.css';
import './styles/testCataloge.css';
import './styles/burger.css';
import './styles/adminPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// redux

import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from "redux";
import { store } from './RTKredux/store';
import { getTotals } from './cart/cartSlice';

store.dispatch(getTotals())

ReactDOM.render(
 
  <Provider store={store}>
  <App />
  </Provider>,
  
  document.getElementById('root')
);


