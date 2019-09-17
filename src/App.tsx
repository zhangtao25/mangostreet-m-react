import React from 'react';
import {HashRouter} from 'react-router-dom'
import AppTabBar from './layouts/AppTabBar'
import './assets/css/App.css'
import {ActivityIndicator} from "antd-mobile";
import {inject, observer} from "mobx-react";
import ReactTransition from './layouts/ReactTransition'

interface State {

}

export interface Props {
  store:any
}

// 观察者
@inject('store')
@observer
class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="App">
        <HashRouter>
          {/*loading组件...*/}
          <ActivityIndicator toast animating={this.props.store.activityIndicatorStatus} text="正在加载"/>
          {/*底部导航栏*/}
          <AppTabBar/>
          {/*一级路由*/}
          <div className='wrap'>
            <ReactTransition/>
          </div>
        </HashRouter>
      </div>
    )
  }
  componentDidMount(): void {

  }
}

export default App;
