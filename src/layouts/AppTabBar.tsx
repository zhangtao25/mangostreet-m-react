import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import './AppTabBar.css'
import addPng from './../assets/images/add.png'

export interface Props {
}

type RealProps = Props & RouteComponentProps;

interface State {
  selectedTab: string;
  hidden: boolean;
  fullScreen: boolean;
  activited:any
}

class AppTabBar extends React.Component<RealProps, State> {
  constructor(props: RealProps) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
      activited:'home'
    };
  }

  goTo(path:any) {
    this.props.history.push('/'+path)
    this.setState({activited:path})
  }

  render() {
    return (
      <div className={'app-tab-bar'}>
        <ul>
          <li className={this.state.activited ==='home'?'activited':''} onClick={() => {this.goTo('home')}}>首页</li>
          <li className={this.state.activited ==='mall'?'activited':''} onClick={() => {this.goTo('mall')}}>商城</li>
          <li className={this.state.activited ==='add'?'activited':''} onClick={() => {this.goTo('add')}}><img src={addPng} alt=""/></li>
          <li className={this.state.activited ==='msg'?'activited':''} onClick={() => {this.goTo('msg')}}>消息</li>
          <li className={this.state.activited ==='mine'?'activited':''} onClick={() => {this.goTo('mine')}}>我</li>
        </ul>
      </div>
    );
  }
  componentDidMount(): void {
    console.log(this.props.location.pathname,111)
    if (this.props.location.pathname === '/'){
      this.props.history.push('/home')
    }
  }
}

export default withRouter(AppTabBar as any)
