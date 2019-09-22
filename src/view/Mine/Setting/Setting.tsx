import React from 'react';
import './Setting.css';
import {NavBar,Icon,List,Modal} from 'antd-mobile'
import {inject, observer} from "mobx-react";

export interface Props {
  history: any,
  store:any,
  route:any
}

export interface listArr {
  [index: number]: any

  map(param: (item: any, index: any) => any): any;
}

export interface State {
  listArr: listArr,
  info: any,
}


// 观察者
@inject('store')
@observer
class Setting extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      listArr: [
        {name: '关注', num: 0},
        {name: '粉丝', num: 0},
        {name: '获赞与收藏', num: 0},
      ],
      info: {}
    };
  }

  goEdite() {
    this.props.history.push(`/mine/EditAccountInfo`)
  }
  goBack(){
    this.props.history.goBack()
  }

  logoff(){
    localStorage.removeItem('token')
    this.props.history.push(`/welcome`)
  }

  render() {
    const Item = List.Item;
    const alert = Modal.alert;
    return (
      <div className={'setting'}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => {this.goBack()}}
        >设置</NavBar>
        <List className="my-list">
          <Item arrow="horizontal" onClick={() => {this.goEdite()}}>编辑资料</Item>
          <Item arrow="horizontal" onClick={() => {}}>1231</Item>
          <Item arrow="horizontal" onClick={() => {}}>5245</Item>
          <Item arrow="horizontal" onClick={() => {}}>45345</Item>
          <Item arrow="horizontal" onClick={() => {}}>45345</Item>
          <Item arrow="horizontal"        onClick={() =>
            alert('登出', '您确认要登出么?', [
              { text: '返回', onPress: () => console.log('返回') },
              { text: '确认', onPress: () => new Promise((resolve) => {
                  this.logoff()
                  resolve()
                }), },
            ])
          }>登出账户</Item>
        </List>
      </div>
    );
  }

  componentDidMount(): void {

  }
}

export default Setting
