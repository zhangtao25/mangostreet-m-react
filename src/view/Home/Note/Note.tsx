import React from 'react';
import NoteService from './../../../service/Note'
import './Note.css'
import {RouteComponentProps} from 'react-router-dom'
import { Carousel, WingBlank,Button,Icon} from 'antd-mobile';
import {observer, inject} from 'mobx-react';

export interface Propsx {
    match:any,
    test:any
}
type Props = Propsx&RouteComponentProps
export interface Data {
    [index:number]:any,
    map(param: (item:any,index:number) => any): any;
}
export interface State {
    item:any,
    data:Data,
    imgHeight:any
}

// 观察者
@inject('test')
@observer
class Note extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = {
            item:"",
            data: [],
            imgHeight: 10,
        };
    }
    render() {
        return (
            <div className={'note'}>
                <Icon style={{marginTop:'10px',marginBottom:'10px'}} type={'left'} onClick={()=>{this.props.history.goBack();this.props.test.changeIsShowHome('block');}}/>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                    >
                        {this.state.data.map(val => (
                            <div
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={'/api/static/notes/'+this.state.item.id+'/images/'+val}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className="content">
                    <p>{this.state.item.title}</p>
                    <p>{this.state.item.desc}</p>
                </div>
            </div>
        );
    }
    componentDidMount(): void {
        console.log(this.props)
        let id = this.props.match.params.id
        NoteService.getNote(id).then((res:any)=>{
            this.setState({item:res[0]})
            setTimeout(() => {
                this.setState({
                    data: res[0].images.split(","),
                });
            }, 100);
        })
    }
}

export default Note
