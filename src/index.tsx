import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/init.css'
import './assets/css/index.css';
import './assets/css/iconfont.css';
import './assets/less-config/antd-mobile-config.less';

import { Provider } from "mobx-react"
import stores from './store'


import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider {...stores}>
      <App/>
    </Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
