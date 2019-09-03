import React from 'react';
import './Welcome.css';
import welcome_bg_01 from './../../assets/welcome_bg/welcome_bg_01.jpeg'
import welcome_bg_02 from './../../assets/welcome_bg/welcome_bg_02.jpeg'
import welcome_bg_03 from './../../assets/welcome_bg/welcome_bg_03.jpeg'
import welcome_bg_04 from './../../assets/welcome_bg/welcome_bg_04.jpeg'
import welcome_bg_05 from './../../assets/welcome_bg/welcome_bg_05.jpeg'
import welcome_bg_06 from './../../assets/welcome_bg/welcome_bg_06.jpeg'
import welcome_bg_07 from './../../assets/welcome_bg/welcome_bg_07.jpeg'
import welcome_bg_08 from './../../assets/welcome_bg/welcome_bg_08.jpeg'
import welcome_bg_09 from './../../assets/welcome_bg/welcome_bg_09.webp'
import welcome_bg_10 from './../../assets/welcome_bg/welcome_bg_10.jpeg'
import welcome_bg_11 from './../../assets/welcome_bg/welcome_bg_11.png'
import welcome_bg_12 from './../../assets/welcome_bg/welcome_bg_12.jpg'
import welcome_bg_13 from './../../assets/welcome_bg/welcome_bg_13.jpg'
import welcome_bg_14 from './../../assets/welcome_bg/welcome_bg_14.jpg'


export interface Props {
  form:any
}
interface State {
  bgImgArr:any
}


class Welcome extends React.Component<Props, State> {
  constructor(props:Props) {
    super(props);
    this.state = {
      bgImgArr:[
        welcome_bg_01,
        welcome_bg_02,
        welcome_bg_03,
        welcome_bg_04,
        welcome_bg_05,
        welcome_bg_06,
        welcome_bg_07,
        welcome_bg_08,
        welcome_bg_09,
        welcome_bg_10,
        welcome_bg_11,
        welcome_bg_12,
        welcome_bg_13,
        welcome_bg_14
      ]
    };
  }
  render() {
    return (
        <div className={'welcome'}>
          <div className={'bg'}>
            <div className="wrap">
              <div>
                <ul>
                  {
                    this.state.bgImgArr.map((item:any)=>(
                        <li>
                          <img src={item} alt=""/>
                        </li>))
                  }
                </ul>
              </div>
              <div>
                <ul>
                  {
                    this.state.bgImgArr.map((item:any)=>(
                        <li>
                          <img src={item} alt=""/>
                        </li>))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <p className={'title'}>小红书</p>
            <p className={'desc'}>标记我的生活</p>
            <div className={'login-btn'}>邮箱登录</div>
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
