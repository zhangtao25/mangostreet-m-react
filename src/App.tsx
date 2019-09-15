import React from 'react';
import {HashRouter} from 'react-router-dom'
import AppTabBar from './layouts/AppTabBar'
import routes from './router/router.config'
import './assets/css/App.css'
import renderRoutes from "./router/renderRoutes";
import {ActivityIndicator} from "antd-mobile";
import {inject, observer} from "mobx-react";

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
          <ActivityIndicator toast animating={this.props.store.activityIndicatorStatus} text="正在加载"/>
          <AppTabBar/>
          <div className='wrap'>
            {renderRoutes(routes,false)}
          </div>
        </HashRouter>
      </div>
    )
  }
  componentDidMount(): void {

  }
}

export default App;
