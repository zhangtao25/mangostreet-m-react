import React from 'react';
import {List, InputItem, Button, ImagePicker, Toast,Icon} from 'antd-mobile'
import './Auth.css';
// @ts-ignore
import { createForm } from 'rc-form';
import AuthService from './../../service/Auth'

export interface Props {
    form:any
    history:any
}
interface State {
    actived:any
}

function loadingToast() {
    Toast.info('头像最多上传一张图片，(づ￣3￣)づ╭❤～', 2, undefined, false);
}

class Auth extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            actived:'login'
        };
    }
    switchType(){
        this.setState({actived:this.state.actived==='login'?'reg':'login'})
    }
    render() {
        return (
            <div className={'auth'}>
                <div className="header-nav">
                    <Icon type={'left'} onClick={()=>{this.props.history.push(`/welcome`)}}/>
                    <span onClick={()=>{this.switchType()}}>切换</span>
                </div>
                <div className={'wrap'}>
                    {this.state.actived === 'login'?
                        (<div>
                            <p className={'title'}>邮箱密码登录</p>
                            <input type="text" placeholder={'请填写邮箱'}/>
                            <input type="text" placeholder={'请填写密码'}/>
                            <div className={'login-btn'}>登录</div>
                        </div>):
                        (<div>
                            <p className={'title'}>邮箱密码注册</p>
                            <input type="text" placeholder={'请填写邮箱'}/>
                            <input type="text" placeholder={'请填写验证码'}/>
                            <span style={{marginTop:'20px'}}>获取验证码</span>
                            <div className={'login-btn'}>注册</div>
                        </div>)}
                </div>

            </div>
        );
    }
    componentDidMount(): void {
    }
}


export default Auth;
