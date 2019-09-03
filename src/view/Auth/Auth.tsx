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

function loadingToast() {
    Toast.info('头像最多上传一张图片，(づ￣3￣)づ╭❤～', 2, undefined, false);
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
    render() {
        const { getFieldProps } = this.props.form;
        const { files } = this.state;
        return (
            <div className={'auth'}>
            </div>
        );
    }
    componentDidMount(): void {
    }
}


export default Auth;
