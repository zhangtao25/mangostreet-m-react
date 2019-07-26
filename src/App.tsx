import React from 'react';

import AppTabBar from './layouts/AppTabBar';
import {InputItem,Button} from 'antd-mobile'

const App: React.FC = () => {

    return (
        <div className="App">
            <div className="test">
                张涛
            </div>
            <InputItem
                placeholder="controled input"
            >受控组件</InputItem>
            {/*<AppTabBar name={'aaa'}/>*/}
            <Button type={'primary'}>ssssss</Button>
        </div>
    // componentD
    );
}

export default App;
