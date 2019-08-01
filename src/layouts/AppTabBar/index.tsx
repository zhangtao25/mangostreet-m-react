import { TabBar } from 'antd-mobile';
import React from 'react';
import './index.css';

import Home from './../../view/Home'
import Mall from './../../view/Mall'
import Msg from './../../view/Msg'
import Mine from './../../view/Mine'


export interface Props {
  name: string;
  enthusiasmLevel?: number;
}
interface State {
  selectedTab: string;
  hidden:boolean;
  fullScreen:boolean;
}


class AppTabBar extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      selectedTab: 'yellowTab',
      hidden: false,
      fullScreen: false,
    };
  }
  render() {
    return (
        <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
          <TabBar
              unselectedTintColor="#999"
              tintColor="#333"
              barTintColor="white"
              hidden={this.state.hidden}
          >
            <TabBar.Item
                title="首页"
                key="首页"
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'blueTab',
                  });
                }}
                data-seed="logId"
            >
              <Home></Home>
            </TabBar.Item>
            <TabBar.Item
                title="商城"
                key="商城"
                selected={this.state.selectedTab === 'redTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'redTab',
                  });
                }}
                data-seed="logId1"
            >
              <Mall></Mall>
            </TabBar.Item>
            <TabBar.Item
                title="消息"
                key="消息"
                selected={this.state.selectedTab === 'greenTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'greenTab',
                  });
                }}
            >
              <Msg></Msg>
            </TabBar.Item>
            <TabBar.Item
                title="我"
                key="我"
                selected={this.state.selectedTab === 'yellowTab'}
                onPress={() => {
                  this.setState({
                    selectedTab: 'yellowTab',
                  });
                }}
            >
              <Mine></Mine>
            </TabBar.Item>
          </TabBar>
        </div>
    );
  }
  componentDidMount(): void {
  }
}

export default AppTabBar
