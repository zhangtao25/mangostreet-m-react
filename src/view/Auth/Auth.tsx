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
}

function loadingToast() {
    Toast.info('头像最多上传一张图片，(づ￣3￣)づ╭❤～', 2, undefined, false);
}

class Auth extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className={'auth'}>
            </div>
        );
    }
    componentDidMount(): void {
    }
}


export default Auth;
