import React from 'react';
import './Mine.css';
import UserService from './../../service/User'
import renderRoutes from './../../router/renderRoutes'
import UploadAvatar from './UploadAvatar/UploadAvatar'
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
class Mine extends React.Component<Props, State> {
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

  render() {
    const {routes} = this.props.route
    return (
      <div className={'mine'}>
        <div style={{display: this.props.store.isShowMine}}>
          <div className="mine-header">
            <i className={'iconfont icon-list'}/>
            <div>
              <p>{this.state.info.user_nickname}</p>
              <p>小红书号：{this.state.info.user_id}</p>
            </div>
            <i className={'iconfont icon-send'}/>
          </div>
          <div className="operate-top">
            <div className='avatar'>
              {this.state.info.user_account?(<img src={`/api/static/users/${this.state.info.user_account}/default.jpg?r=${Math.random()}`} alt=""/>):""}

              <UploadAvatar></UploadAvatar>
            </div>

            <div className='right'>
              <ul>
                {this.state.listArr.map((item, index) => {
                  return (
                    <li key={index}>
                      <p>{item.num}</p>
                      <p>{item.name}</p>
                    </li>
                  )
                })}
              </ul>
              <ul>
                <li onClick={() => {
                  this.goEdite()
                }}>编辑资料
                </li>
                <li>
                  <i className={'iconfont icon-set'} onClick={()=>{this.props.history.push('/mine/setting')}}/>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {renderRoutes(routes,false)}
      </div>
    );
  }

  componentDidMount(): void {
    UserService.getUserInfo().then((res: any) => {
      console.log(res)
      this.setState({info: res.response})
    })
  }
}

export default Mine
