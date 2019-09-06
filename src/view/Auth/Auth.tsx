import React from 'react';
import {Toast,Icon} from 'antd-mobile'
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

class AuthX extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            actived:'login'
        };
    }
    switchType(){
        this.setState({actived:this.state.actived==='login'?'reg':'login'})
    }
    login(){
        let user_account = this.props.form.getFieldValue('user_account');
        let user_password = this.props.form.getFieldValue('user_password');
        AuthService.login({user_account,user_password}).then((res:any)=>{
            console.log(res)
        })
    }
    reg(){
        let user_account = this.props.form.getFieldValue('user_account');
        let vcode = this.props.form.getFieldValue('vcode');
        AuthService.reg({user_account,vcode}).then((res:any)=>{
            console.log(res)
        })
    }
    getVcode(){
        let user_account = this.props.form.getFieldValue('user_account');
        AuthService.getVcode({user_account}).then((res:any)=>{
            console.log(res)
        })
    }
    render() {
        const { getFieldProps } = this.props.form;
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
                            <input {...getFieldProps('user_account')} type="text" placeholder={'请填写邮箱'}/>
                            <input {...getFieldProps('user_password')} type="text" placeholder={'请填写密码'}/>
                            <div className={'login-btn'} onClick={()=>{this.login()}}>登录</div>
                        </div>):
                        (<div>
                            <p className={'title'}>邮箱密码注册</p>
                            <input {...getFieldProps('user_account')} type="text" placeholder={'请填写邮箱'}/>
                            <input {...getFieldProps('vcode')} type="text" placeholder={'请填写验证码'}/>
                            <span style={{marginTop:'20px'}} onClick={()=>{this.getVcode()}}>获取验证码</span>
                            <div className={'login-btn'} onClick={()=>{this.reg()   }}>注册</div>
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
