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

function loadingToast(text:any) {
    Toast.info(text, 2, undefined, false);
}

class Auth extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>

            </div>
        );
    }
    componentDidMount(): void {
    }
}


export default createForm()(Auth);
