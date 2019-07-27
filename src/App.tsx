import React from 'react';

import {Button} from 'antd-mobile';
import AppTabBar from './layouts/AppTabBar'

const App: React.FC = () => {
  return (
    <div className="App">
      <AppTabBar name={'zhangtao'}/>
    </div>
  );
}

export default App;
