/**
 * @description: 
 * @author: ycz
 * @Date: 2020-09-17 19:50:10
 * @LastEditTime: 2020-09-17 20:09:46
 * @LastEditors: ycz
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './routes/Index';
import './index.less';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
