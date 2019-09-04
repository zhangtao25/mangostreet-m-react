import React from 'react';
import './Welcome.css';
import xiaohongshu_logo from '../../assets/images/xiaohongshu_logo.png'
import finaltest from '../../assets/welcome_bg/finaltest.jpg'


export interface Props {
  form:any,
    history:any
}
interface State {
  // bgImgArr:any
}


class Welcome extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
    };
  }
    goLoginPage(){
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
              <img className={'title'} src={xiaohongshu_logo} alt=""/>
              <p className={'desc'}>标记我的生活</p>
              <div className={'login-btn'} onClick={()=>{this.goLoginPage()}}>邮箱登录</div>
              <div className={'other-btn'}>
                <p>微博</p>
                <p>QQ</p>
              </div>
          </div>
        </div>
    );
  }
  componentDidMount(): void {
  }
}


export default Welcome
