import React from 'react';
import ReactDOM from 'react-dom';

import './assets/css/init.css'
import './assets/css/index.css';
import './assets/css/iconfont.css';
import './assets/less-config/antd-mobile-config.less';

import App from './App';
import Mock from './mock'
import * as serviceWorker from './serviceWorker';

// Mock.init();

ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
