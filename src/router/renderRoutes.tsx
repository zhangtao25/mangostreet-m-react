import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

declare var window: Window & { $store: any }

const renderRoutes = (routes:any, authed:any, authPath = '/login', extraProps = {}, switchProps = {}) => routes ? (
  <Switch {...switchProps}>
    {routes.map((route:any, i:any) => (
      <Route
        key={route.key || i}
        path={route.path}
        exact={route.exact}
        strict={route.strict}
        render={(props) => {
          // 控制Home页显隐藏
          // setTimeout(()=>{
          //   if (route.path === '/Home'){
          //     window.$store.store.changeIsShowHome('block')
          //   } else {
          //     window.$store.store.changeIsShowHome('none')
          //   }
          //
          //   if (route.path === '/Mine'){
          //     window.$store.store.changeIsShowMine('block')
          //   } else {
          //     window.$store.store.changeIsShowMine('none')
          //   }
          // },3000)



          if (!route.requiresAuth || authed || route.path === authPath) {
            return <route.component {...props} {...extraProps} route={route} />
          }
          return <Redirect to={{ pathname: authPath, state: { from: props.location } }} />
        }}
      />
    ))}
  </Switch>
) : null

export default renderRoutes
