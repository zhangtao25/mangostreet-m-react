import React from 'react';
import {List, InputItem, Button, ImagePicker, Toast} from 'antd-mobile'
import './Auth.css';
// @ts-ignore
import { createForm } from 'rc-form';
import AuthService from './../../service/Auth'

export interface Props {
    form:any
}
interface State {
    files:any,
    authType:any
}

function loadingToast(text:any) {
    Toast.info(text, 2, undefined, false);
}
const data:any=[];
class Auth extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            files:data,
            authType:'login'
        };
    }
    onChange = (files:any, type:any, index:any) => {
        if (files.length>1){
            loadingToast('最多一张')
        }else {
            this.setState({
                files,
            });
        }
    }
    login = () =>{
        let user_account = this.props.form.getFieldValue('user_account');
        let user_password = this.props.form.getFieldValue('user_password');
        AuthService.login({user_account,user_password}).then((res:any)=>{
            console.log(res)
            localStorage.setItem('token',res.token)
        })
    }
    reg = () =>{
        let user_account = this.props.form.getFieldValue('user_account');
        let user_password = this.props.form.getFieldValue('user_password');
        let v_code = this.props.form.getFieldValue('v_code');
        let user_nickname = this.props.form.getFieldValue('user_nickname');
        var formData:any = new FormData();
        formData.append('user_img', this.state.files[0].file, this.state.files[0].file.name);
        formData.append('user_account', user_account);
        formData.append('user_password', user_password);
        formData.append('v_code', v_code);
        formData.append('user_nickname', user_nickname);
        AuthService.reg(formData).then(res=>{
            console.log(res)
        })
    }
    getVcode=()=>{
        let user_account = this.props.form.getFieldValue('user_account');
        let v_code = this.props.form.getFieldValue('v_code');
        AuthService.getVcode({user_account,v_code}).then(res=>{
            if (res=='no'){
                loadingToast('邮箱已注册！')
            } else {
                loadingToast('验证码是：'+res)
            }
        })
    }
    switchAuthType=()=>{
        this.setState({authType:this.state.authType==='login'?'reg':'login'})
    }
    render() {
        const { getFieldProps } = this.props.form;
        const { files } = this.state;
        return (
            <div>
                <Button onClick={this.switchAuthType}>切换</Button>
                {this.state.authType==='login'?(
                    <List renderHeader={() => '登录'}>
                        <InputItem
                            {...getFieldProps('user_account')}
                            placeholder="请输入邮箱"
                        >邮箱</InputItem>
                        <InputItem
                            {...getFieldProps('user_password')}
                            placeholder="请输入密码"
                        >密码</InputItem>
                        <Button onClick={()=>{this.login()}}>登录</Button>
                    </List>
                ):(<List renderHeader={() => '注册'}>
                    <InputItem
                        {...getFieldProps('user_account')}
                        placeholder="请输入邮箱"
                    >邮箱</InputItem>
                    <InputItem
                        {...getFieldProps('user_password')}
                        placeholder="请输入密码"
                    >密码</InputItem>
                    <InputItem
                        {...getFieldProps('v_code')}
                        placeholder="请输入验证码"
                    >验证码</InputItem>
                    <Button onClick={()=>{this.getVcode()}}>获取验证码</Button>
                    <InputItem
                        {...getFieldProps('user_nickname')}
                        placeholder="请输入昵称"
                    >昵称</InputItem>
                    <ImagePicker
                        files={files}
                        onChange={this.onChange}
                        onImageClick={(index, fs) => console.log(index, fs)}
                        selectable={files.length < 2}/>
                    <Button onClick={()=>{this.reg()}}>注册</Button>
                </List>)}
            </div>
        );
    }
    componentDidMount(): void {
    }
}


export default createForm()(Auth);
