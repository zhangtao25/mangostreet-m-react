import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import AppTabBar from './layouts/AppTabBar'
import renderRoutes from "./router/renderRoutes";
import {ActivityIndicator} from "antd-mobile";
import {inject, observer} from "mobx-react";
import RouterConfig from './router/router.config';
import AnimatedSwitch from './layouts/AnimatedSwitch'

import './assets/css/App.css'

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
        <BrowserRouter>
          <ActivityIndicator toast animating={this.props.store.activityIndicatorStatus} text="正在加载"/>
          <AppTabBar/>
          <div className='wrap'>
            <AnimatedSwitch>
              {renderRoutes(RouterConfig,false)}
            </AnimatedSwitch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
  componentDidMount(): void {

  }
}

export default App;
