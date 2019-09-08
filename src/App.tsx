import React from 'react';

import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import AppTabBar from './layouts/AppTabBar'
import routes from './router/router.config'
import './assets/css/App.css'

export interface Routei {
    path: any,
    component: any,
    routes: any
}

function RouteWithSubRoutes(route: Routei) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes}/>
            )}
        />
    );
}

interface State {
}

export interface Props {
}

class App extends React.Component<Props, State> {
    render() {
        return (
            <div className="App">
                <HashRouter>
                    <AppTabBar/>
                    <div className='wrap'>
                        <Switch>
                            {routes.map((route, i) => (<RouteWithSubRoutes routes={route} key={i} {...route} />))}
                            <Redirect from='/' to='/home'/>
                        </Switch>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default App;
