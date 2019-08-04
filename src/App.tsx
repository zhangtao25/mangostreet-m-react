import React from 'react';

import {HashRouter, Switch, Route} from 'react-router-dom'
import AppTabBar from './layouts/AppTabBar'
import routes from './router/router.config'


export interface Routei {
  path:any,
  component:any,
  routes:any
}
function RouteWithSubRoutes(route:Routei) {
  return (
      <div>
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes}/>
            )}
        />
      </div>
  );
}

interface State {
}
export interface Props {

}

class App extends React.Component<Props,State>{
  render() {
    return(
        <div className="App">
          <HashRouter>
            <AppTabBar/>
            <Switch>
              {routes.map((route, i) => (<RouteWithSubRoutes routes={route} key={i} {...route} />))}
            </Switch>
          </HashRouter>
        </div>
        )
  }
}

export default App;
