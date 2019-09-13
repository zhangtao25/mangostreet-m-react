import React from 'react';
import {Toast, Icon} from 'antd-mobile'
import './Auth.css';
// @ts-ignore
import {createForm} from 'rc-form';
import AuthService from './../../service/Auth'

export interface Props {
  form: any
  history: any
}

interface State {
  actived: any,
  countdown: number,
  getVcodeBtnStatus: string
}


class AuthX extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      actived: 'login',
      countdown: 60,
      getVcodeBtnStatus: 'inline-block'
    };
  }

  switchType() {
    this.setState({actived: this.state.actived === 'login' ? 'reg' : 'login'})
  }

  login() {
    let user_account = this.props.form.getFieldValue('user_account');
    let user_password = this.props.form.getFieldValue('user_password');
    AuthService.login({user_account, user_password}).then((res: any) => {
      console.log(res)
      if (!res.result) {
        Toast.fail(res.errorMessage, 2, undefined, false);
      } else {
        localStorage.setItem('token', res.response.token)
        this.props.history.push(`/home`)
      }
    })
  }

  reg() {
    let user_account = this.props.form.getFieldValue('user_account');
    let vcode = this.props.form.getFieldValue('vcode');
    let user_password = this.props.form.getFieldValue('user_password');
    let user_nickname = this.props.form.getFieldValue('user_nickname');
    if (!this.checkValue(user_account)||
      !this.checkValue(vcode)||
      !this.checkValue(user_password)||
      !this.checkValue(user_nickname)){
      Toast.fail('请填写完整', 2, undefined, false);
      return
    }
    AuthService.reg({user_account, vcode,user_nickname,user_password}).then((res: any) => {
      if (res.result) {
        Toast.success(res.response, 2, undefined, false);
        this.switchType()
      }
    })
  }

  checkValue(val:any){
    if (val===undefined||val===''){
      return false
    } else {
      return true
    }
  }

  getVcode() {
    let user_account = this.props.form.getFieldValue('user_account');
    AuthService.getVcode({user_account}).then((res: any) => {
      if (res.result) {
        Toast.info(res.response.vcode, 2, undefined, false);
        this.countdown()
        if (this.state.getVcodeBtnStatus === 'inline-block') {
          this.setState({getVcodeBtnStatus: 'none'})
        } else {
          this.setState({getVcodeBtnStatus: 'inline-block'})
        }
      } else {
        Toast.fail(res.errorMessage, 2, undefined, false);
      }
    })
  }

  countdown() {
    let timer = setInterval(() => {
      this.setState({countdown: this.state.countdown - 1})
      if (this.state.countdown === 0) {
        clearInterval(timer)
        this.setState({getVcodeBtnStatus: 'inline-block'})
      }
    }, 1000)
  }

  render() {
    const {getFieldProps} = this.props.form;
    return (
      <div className={'auth'}>
        <div className="header-nav">
          <Icon type={'left'} onClick={() => {
            this.props.history.push(`/welcome`)
          }}/>
          <span onClick={() => {
            this.switchType()
          }}>切换</span>
        </div>
        <div className={'wrap'}>
          {this.state.actived === 'login' ?
            (<div>
              <p className={'title'}>用户登录</p>
              <input {...getFieldProps('user_account')} type="text" placeholder={'请填写邮箱'}/>
              <input {...getFieldProps('user_password')} type="password" placeholder={'请填写密码'}/>
              <div className={'login-btn'} onClick={() => {
                this.login()
              }}>登录
              </div>
            </div>) :
            (<div>
              <p className={'title'}>用户注册</p>
              <input {...getFieldProps('user_account')} type="toext" placeholder={'请填写邮箱'}/>
              <input {...getFieldProps('user_password')} type="toext" placeholder={'请填写密码'}/>
              <input {...getFieldProps('user_nickname')} type="toext" placeholder={'请填写昵称'}/>
              <input {...getFieldProps('vcode')} placeholder={'请填写验证码'}/>
              <p style={{marginTop: '20px'}}>
                <span onClick={() => {
                  this.getVcode()
                }} style={{display: this.state.getVcodeBtnStatus}}>获取验证码</span>
                <span
                  style={{display: (this.state.getVcodeBtnStatus === 'inline-block' ? 'none' : 'inline-block')}}>{this.state.countdown}秒后可重发</span>
              </p>
              <div className={'login-btn'} onClick={() => {
                this.reg()
              }}>注册
              </div>
            </div>)}
        </div>
      </div>
    );
  }

  componentDidMount(): void {
  }
}

const Auth = createForm()(AuthX);
export default Auth;
