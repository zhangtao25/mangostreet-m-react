import React from 'react';
import {HashRouter, withRouter, Switch, Route, Redirect} from 'react-router-dom'
import AppTabBar from './layouts/AppTabBar'
import routes from './router/router.config'
import './assets/css/App.css'
import renderRoutes from "./router/renderRoutes";
import {ActivityIndicator} from "antd-mobile";
import {inject, observer} from "mobx-react";
import RouterConfig from './router/router.config';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

interface State {

}

export interface Props {
  store:any
}

const DEFAULT_SCENE_CONFIG = {
  enter: 'from-right',
  exit: 'to-exit'
};

const getSceneConfig = (location:any) => {
  const matchedRoute:any = RouterConfig.find(config => new RegExp(`^${config.path}$`).test(location.pathname));
  return (matchedRoute && matchedRoute.sceneConfig) || DEFAULT_SCENE_CONFIG;
};

let oldLocation:any = null;
const Routes = withRouter(({location, history}) => {

  // 转场动画应该都是采用当前页面的sceneConfig，所以：
  // push操作时，用新location匹配的路由sceneConfig
  // pop操作时，用旧location匹配的路由sceneConfig
  let classNames = '';
  if(history.action === 'PUSH') {
    classNames = 'forward-' + getSceneConfig(location).enter;
  } else if(history.action === 'POP' && oldLocation) {
    classNames = 'back-' + getSceneConfig(oldLocation).exit;
  }

  // 更新旧location
  oldLocation = location;


  return (
    <TransitionGroup
      className={'router-wrapper'}
      childFactory={child => React.cloneElement(child, {classNames})}
    >
      <CSSTransition timeout={5000} key={location.pathname}>
        <Switch location={location}>
          {RouterConfig.map((config, index) => (
            // @ts-ignore
            <Route exact key={index} render={(props) => {return <config.component {...props} route={config} />}} path={config.path}/>
          ))}
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
});

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
            {/*{renderRoutes(routes,false)}*/}
            <Routes></Routes>
          </div>
        </HashRouter>
      </div>
    )
  }
  componentDidMount(): void {

  }
}

export default App;
