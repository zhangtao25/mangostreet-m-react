import React from 'react';
import './Welcome.css';
import xiaohongshu_logo from '../../assets/images/xiaohongshu_logo.png'
import finaltest from '../../assets/welcome_bg/finaltest.jpg'


export interface Props {
    form: any,
    history: any
}

interface State {
}


class Welcome extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    goLoginPage() {
        this.props.history.push(`/auth`)
    }

    render() {
        return (
            <div className={'welcome'}>
                <div className={'bg'}>
                    <div className="wrap">
                        <div>
                            <img src={finaltest} alt=""/>
                        </div>
                        <div>
                            <img src={finaltest} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div>
                        <img className={'title'} src={xiaohongshu_logo} alt=""/>
                        <p className={'desc'}>标记我的生活</p>
                    </div>

                    <div>
                        <div className={'login-btn'} onClick={() => {
                            this.goLoginPage()
                        }}>
                            <i className={'iconfont icon-email'}/>
                            <span>邮箱登录</span>
                        </div>
                        <div className={'other-btn'}>
                            <p>
                                <i className={'iconfont icon-weibo'}/>
                                <span>微博</span>
                            </p>
                            <p>
                                <i className={'iconfont icon-qq'}/>
                                <span>QQ</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Welcome
