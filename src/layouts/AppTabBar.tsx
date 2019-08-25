import React from 'react';
import {withRouter,RouteComponentProps} from 'react-router-dom';
import './AppTabBar.css'
import addPng from './../assets/images/add.png'

export interface Props {
}
type HomeProps = Props & RouteComponentProps;
interface State {
  selectedTab: string;
  hidden:boolean;
  fullScreen:boolean;
}

class AppTabBar extends React.Component<HomeProps, State> {
  constructor(props:HomeProps) {
    super(props);
    this.state = {
      selectedTab: 'blueTab',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    return (
        <div className={'app-tab-bar'}>
          <ul>
            <li onClick={()=>this.props.history.push('/home')}>首页</li>
            <li onClick={()=>this.props.history.push('/mall')}>商城</li>
            <li onClick={()=>this.props.history.push('/add')}>
              <img src={addPng} alt=""/>
            </li>
            <li onClick={()=>this.props.history.push('/msg')}>消息</li>
            <li onClick={()=>this.props.history.push('/mine')}>我</li>
          </ul>
        </div>
    );
  }
  componentDidMount(): void {
    // console.log(this.props)
  }
}
export default withRouter(AppTabBar as any)
