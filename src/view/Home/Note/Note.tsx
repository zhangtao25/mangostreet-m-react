import React from 'react';
import NoteService from './../../../service/Note'
import './Note.css'
import {RouteComponentProps} from 'react-router-dom'

import { Carousel, WingBlank,Button } from 'antd-mobile';
// import index from "../../../mock";

export interface Propsx {
    match:any
}
type Props = Propsx&RouteComponentProps

export interface noteData {
    [index:number]:any,
    map(param: (item:any,index:number) => any): any;
}
export interface Data {
    [index:number]:any,
    map(param: (item:any,index:number) => any): any;
}
export interface State {
    item:any,
    data:Data,
    imgHeight:any
}

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
                <div>
                    <Button style={{'width':'100px'}} onClick={()=>{this.props.history.goBack()}}>回去</Button>
                </div>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <a
                                href={'###'}
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={'/api/assets/notes/'+this.state.item.id+'/images/'+val+'.jpeg'}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <p>{this.state.item.title}</p>
                <p>{this.state.item.desc}</p>
            </div>
        );
    }
    componentDidMount(): void {
        console.log(this.props,11111111111)
        let id = this.props.match.params.id
        // this.props.local
        NoteService.getNote(id).then((res:any)=>{
            this.setState({item:res.notes})
            console.log(res.notes.images.split(","))

            // simulate img loading
            setTimeout(() => {
                this.setState({
                    data: res.notes.images.split(","),
                });
            }, 100);
        })
    }
}

export default Note
