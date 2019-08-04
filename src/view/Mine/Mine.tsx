import React from 'react';
import './Mine.css';
import touxiang from './../../assets/images/touxiang.jpg'

export interface Props {
}
export interface listArr {
    [index:number]:any
    map(param: (item:any,index:any) => any): any;
}
export interface State {
    listArr: listArr
}


class Mine extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            listArr:[
                {name:'关注',num:29},
                {name:'粉丝',num:3},
                {name:'获赞与收藏',num:6},
            ]
        };
    }
    render() {
        // let listArr = this.state.listArr
        return (
            <div>
                <div className="mine-header">
                    <i className={'iconfont icon-list'}></i>
                    <div>
                        <p>张涛</p>
                        <p>小红书号：508270275</p>
                    </div>
                    <i className={'iconfont icon-send'}></i>
                </div>
                <div className="operate-top">
                    <div className='avatar'>
                        <img src={touxiang} alt=""/>
                    </div>

                    <div className='right'>
                        <ul>
                            {this.state.listArr.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <p>{item.num}</p>
                                        <p>{item.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul>
                            <li>编辑资料</li>
                            <li>
                                <i className={'iconfont icon-set'}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount(): void {
    }
}

export default Mine
