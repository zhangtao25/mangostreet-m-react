import React from 'react';
import {HashRouter,Switch,Route,withRouter} from 'react-router-dom'
import AppTabBar from './layouts/AppTabBar'
import routes from './router/router.config'
import './assets/css/App.css'
import renderRoutes from "./router/renderRoutes";
import {ActivityIndicator} from "antd-mobile";
import {inject, observer} from "mobx-react";
import {TransitionGroup,CSSTransition} from 'react-transition-group'

interface State {

}

export interface Props {
  store:any
}

const Routes = withRouter(({location}) => (
  <TransitionGroup className={'router-wrapper'}>
    <CSSTransition
      timeout={5000}
      classNames={'fade'}
      key={location.pathname}
      unmountOnExit={true}
    >
      {renderRoutes(routes,false)}
    </CSSTransition>
  </TransitionGroup>
));

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
            <Routes/>
          </div>
        </HashRouter>
      </div>
    )
  }
  componentDidMount(): void {

  }
}

export default App;
